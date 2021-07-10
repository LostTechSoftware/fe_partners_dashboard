import { useState, useCallback, useEffect } from "react";
import api from "../../services/api";
import socketio from "socket.io-client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useTasks = () => {
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);
  const [screen, setScreen] = useState(0);
  const [orders, setOrders] = useState([]);
  const [newOrders, setNewOrders] = useState([]);
  const [selectedOrders, setSelectedOrders] = useState("");
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [reason, setReason] = useState("");
  const _id = sessionStorage.getItem("_id");
  const name = sessionStorage.getItem("restaurantName");

  async function Collapse() {
    const obj = selectedOrders;

    obj.showAdditionals = !obj.showAdditionals;

    setSelectedOrders(obj);
    setClick(click + 1);
  }

  async function GetOrders() {
    setOrders([]);
    setLoading(true);
    const { data } = await api.get("/tasks/new");
    setNewOrders(data);

    // new taks
    if (screen === 0) {
      const response0 = await api.get("/tasks/new");
      setOrders(response0.data);
    }
    // preparing tasks
    if (screen === 1) {
      const response1 = await api.get("/tasks/preparing");
      setOrders(response1.data);
    }
    // delivery tasks
    if (screen === 2) {
      const response2 = await api.get("/tasks/delivery");
      setOrders(response2.data);
    }

    setLoading(false);
  }

  useEffect(() => {
    // async function SocketFunction() {
    //   const socket = socketio(process.env.REACT_APP_SERVER, {
    //     query: {
    //       user: _id,
    //       username: name,
    //       restaurant: true,
    //     },
    //   });

    //   socket.on("new_order", GetOrders);
    // }
    // SocketFunction();
    GetOrders();
  }, [screen]);

  async function SendReason() {
    setLoading(true);
    try {
      await api.post(`/reject/order/${selectedOrders._id}`, {
        reason,
      });

      toast.warning("Pedido rejeitado!");
    } catch {
      toast.error("Erro em rejeitar o pedido");
    }
    setLoading(false);
    setShowPopup(false);
  }

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  return [
    isMenuMobileOpened,
    handleMenuMobileOpen,
    screen,
    setScreen,
    orders,
    newOrders,
    selectedOrders,
    setSelectedOrders,
    loading,
    Collapse,
    SendReason,
    showPopup,
    setShowPopup,
    reason,
    setReason,
  ];
};
