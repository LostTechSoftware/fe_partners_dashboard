import { useState, useCallback, useEffect } from "react";
import api from "../../services/api";
import socketio from "socket.io-client";
import Fuse from "fuse.js";
import soundMessage from "../../assets/message-recived.mp3";
import useSound from "use-sound";

export const useMessage = () => {
  const [messages, setMessages] = useState([]);
  const [orders, setOrders] = useState([]);
  const [initialOrders, setInitialOrders] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);
  const [chat, setChat] = useState("");
  const [message, setMessage] = useState("");
  const [showMessageDetails, setShowMessageDetails] = useState(false);
  const [search, setSearch] = useState("");
  const restaurantId = sessionStorage.getItem("_id");
  const [play] = useSound(soundMessage);

  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ["token"],
  };

  const fuse = new Fuse(orders, options);

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  async function GetOrders() {
    const { data } = await api.get("/tasks");

    setOrders(data);
    setInitialOrders(data);
  }

  async function getMessages() {
    if (!selectedMessage) return;
    const { data } = await api.get(`/chat/${selectedMessage._id}`);

    if (!data) return;
    const newData = data.text.reverse()[0];

    if (newData.chatInfo.id === restaurantId) {
      play();
    }

    setChat(data);
    setMessages(data.text);
  }

  useEffect(() => {
    async function SocketFunction() {
      const _id = sessionStorage.getItem("_id");
      const name = sessionStorage.getItem("restaurantName");

      const socket = socketio(process.env.REACT_APP_SERVER, {
        query: {
          user: _id,
          username: name,
          restaurant: true,
        },
      });

      socket.on("new_order", GetOrders);
      socket.on("message", getMessages);
    }

    SocketFunction();
    getMessages();
    GetOrders();

    if (!search) return setOrders(initialOrders);

    const arr = fuse.search(search);
    setOrders(arr.map((a) => a.item));
  }, [selectedMessage, search]);

  const sendMessage = async (event) => {
    event && event.preventDefault();
    if (/\w|_/.test(message)) {
      if (!chat._id) {
        await api.post(`/restaurant/new/chat/${selectedMessage._id}`, {
          content: message,
        });
        setMessage("");
      } else {
        await api.post(`/restaurant/chat/${chat._id}`, {
          content: message,
        });
        setMessage("");
      }
    }
  };

  return [
    isMenuMobileOpened,
    handleMenuMobileOpen,
    messages,
    orders,
    selectedMessage,
    setSelectedMessage,
    restaurantId,
    message,
    setMessage,
    sendMessage,
    setMessages,
    setChat,
    showMessageDetails,
    setShowMessageDetails,
    setSearch,
  ];
};
