import { useState, useCallback, useEffect } from "react";
import api from "../../services/api";

export const useLocalization = () => {
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);
  const [deliveryMans, setDeliveryMans] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState("");

  const restaurantLocation = JSON.parse(
    sessionStorage.getItem("restaurantLocation")
  );

  useEffect(() => {
    async function getOrders() {
      const { data } = await api.get("/tasks");

      setOrders(
        data.filter((order) => order.address && order.address.location)
      );
    }
    getOrders();
  }, []);

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  return [
    isMenuMobileOpened,
    handleMenuMobileOpen,
    restaurantLocation,
    orders,
    showInfo,
    setShowInfo,
    selectedInfo,
    setSelectedInfo,
  ];
};
