import { useEffect, useState } from "react";

export const usePrint = (order) => {
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

  return [paymentMethod];
};
