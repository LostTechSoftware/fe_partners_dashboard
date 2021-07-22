import { useState, useCallback, useEffect } from "react";
import api from "../../services/api";
import socketio from "socket.io-client";
import { toast } from "../../Components/Toast";

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
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [restaurantIsOpen, setRestaurantIsOpen] = useState(true);
  const [removeOption, setRemoveOption] = useState(false);
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("#2ECC71");
  const [showChange, setShowChange] = useState(false);
  const _id = sessionStorage.getItem("_id");
  const name = sessionStorage.getItem("restaurantName");

  const Reload = async () => {
    const { data } = await api.get("/opened");
    setRestaurantIsOpen(data.opened);
    setRemoveOption(data.removeOption);

    if (restaurantIsOpen) setStatus("Aberto");
    if (!restaurantIsOpen) setStatus("Fechado");
  };

  window.addEventListener("offline", function (e) {
    setStatus("Conectando");
    setColor("#FFE115");
  });

  window.addEventListener("online", function (e) {
    setStatus("Aberto");
    setColor("#2ECC71");
  });

  async function ChangeStatus(toClose, remove = true, delivery = true) {
    if (!toClose) return setShowChange(false);

    try {
      await api.post("/close", { open: delivery, removeOption: remove });
      toast.success("Status atualizado");
      Reload();
    } catch {
      toast.error("Erro ao atualizar status");
    }
  }

  async function Collapse() {
    const obj = selectedOrders;

    obj.showAdditionals = !obj.showAdditionals;

    setSelectedOrders(obj);
    setClick(click + 1);
  }

  const GetOrders = async () => {
    setOrders([]);
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

    setLoading(false);
  };

  useEffect(() => {
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
    }
    SocketFunction();

    if (restaurantIsOpen) {
      setStatus("Aberto");
      setColor("#2ECC71");
    }
    if (!restaurantIsOpen) {
      setStatus("Fechado");
      setColor("#E74C3C");
    }

    GetOrders();
    Reload();
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
    showOrderDetails,
    setShowOrderDetails,
    toggleMenu,
    setToggleMenu,
  ];
};
