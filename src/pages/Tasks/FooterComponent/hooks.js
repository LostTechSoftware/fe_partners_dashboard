import { useState, useEffect } from "react";
import { toast } from "../../../Components/Toast";

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
    try {
      await api.post(`/approve/order/${order._id}`);
      toast.success("Pedido aceito!");
    } catch {
      return toast.error("Erro ao aceitar pedido");
    }
  }

  async function deliveryOrder() {
    try {
      await api.post(`/onTheWay/order/${order._id}`);
    } catch {
      return toast.error("Erro ao enviar pedido");
    }
  }

  return [paymentMethod, deliveryOrder, acceptOrder];
};
