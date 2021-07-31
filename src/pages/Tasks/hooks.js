import { useState, useCallback, useEffect, useContext } from "react";
import api from "../../services/api";
import socketio from "socket.io-client";
import { toast } from "../../Components/Toast";
import OpenedContext from "../../contexts/opened";

export const useTasks = () => {
  const { setOpened, setRemove, setIsConecting } = useContext(OpenedContext);
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);
  const [screen, setScreen] = useState(0);
  const [orders, setOrders] = useState([]);
  const [newOrders, setNewOrders] = useState([]);
  const [selectedOrders, setSelectedOrders] = useState("");
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [reason, setReason] = useState("");
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [restaurantIsOpen, setRestaurantIsOpen] = useState(false);
  const [removeOption, setRemoveOption] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const _id = sessionStorage.getItem("_id");
  const name = sessionStorage.getItem("restaurantName");

  const Reload = async () => {
    const { data } = await api.get("/opened");
    setOpened(data.opened);
    setRemove(data.opened);

    setRestaurantIsOpen(data.opened);
    setRemoveOption(data.removeOption);
  };

  window.addEventListener("offline", () => {
    setConnecting(true);
    setIsConecting(true);
  });

  window.addEventListener("online", () => {
    setConnecting(false);
    setIsConecting(false);
  });

  async function ChangeStatus(remove = true, delivery = true) {
    try {
      await api.post("/close", { open: delivery, removeOption: remove });
      toast.success("Status atualizado");
      Reload();
    } catch (error) {
      toast.error("Erro ao atualizar status");
    }
  }

  async function Collapse(productId) {
    const obj = selectedOrders;

    const index = obj.products.findIndex(
      (product) => product._id === productId
    );

    obj.products[index].showAdditionals = !obj.products[index].showAdditionals;

    setSelectedOrders(obj);
    setClick(click + 1);
  }

  const GetOrders = async () => {
    setLoading(true);

    const { data } = await api.get("/tasks/new");

    setNewOrders(data);

    if (screen === 0) {
      const response0 = await api.get("/tasks/new");

      setOrders(response0.data);
    }

    if (screen === 1) {
      const response1 = await api.get("/tasks/preparing");

      setOrders(response1.data);
    }

    if (screen === 2) {
      const response2 = await api.get("/tasks/delivery");

      setOrders(response2.data);
    }

    const orderFind = orders.find(
      (order) => selectedOrders && order._id == selectedOrders._id
    );

    console.log(orderFind);

    orderFind && setSelectedOrders(orderFind);
    setLoading(false);
  };

  async function SocketFunction() {
    const socket = socketio(process.env.REACT_APP_SERVER, {
      query: {
        user: _id,
        username: name,
        restaurant: true,
      },
    });

    socket.on("new_order", GetOrders);
    socket.on("open", Reload);
    socket.on("status", GetOrders);
  }

  async function Reconect() {
    if (connecting) return toast.error("Conectando");

    if (screen === 0) toast.success("Conectado");
  }

  useEffect(() => {
    SocketFunction();
    GetOrders();
    Reload();
    Reconect();
  }, [screen, connecting]);

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
    showOrderDetails,
    setShowOrderDetails,
    toggleMenu,
    setToggleMenu,
    restaurantIsOpen,
    removeOption,
    ChangeStatus,
    connecting,
  ];
};
