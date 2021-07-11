import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../../services/api";

export const useFooterComponent = ({ order }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    switch (order.payment_method) {
      case "cash":
        setPaymentMethod("Dinheiro");
        break;
      case "card":
        setPaymentMethod("Pago com cartão");
        break;
      case "online":
        setPaymentMethod("Pago online");
        break;
      default:
        setPaymentMethod("Buscando método de pagamento usado");
    }
  }, [order]);

  async function acceptOrder() {
    await api.post(`/approve/order/${order._id}`).catch((error) => {
      if (error) {
        return toast.error(error.response.data);
      }
    });
    toast.success("Pedido aceito!");
  }

  async function deliveryOrder() {
    await api.post(`/onTheWay/order/${order._id}`).catch((error) => {
      if (error) {
        return toast.error(error.response.data);
      }
    });
    toast.success("Pedido enviado!");
  }

  return [paymentMethod, deliveryOrder, acceptOrder];
};
