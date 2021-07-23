import { useEffect, useState } from "react";
import { toast } from "../../../Components/Toast";
import api from "../../../services/api";

export const useHeader = () => {
  const [showTimePopUp, setShowTimePopUp] = useState(false);
  const [showTimeRemovePopUp, setShowTimeRemovePopUp] = useState(false);
  const [showOpenedPopUp, setShowOpenedPopUp] = useState(false);

  const [timeRemove, setTimeRemove] = useState(0);
  const [timeDelivery, setTimeDelivery] = useState(0);

  useEffect(() => {
    async function GetSettings() {
      const { data } = await api.get("/partner/settings");

      setTimeDelivery(data.delay);
      setTimeRemove(data.delayRemove);
    }
    GetSettings();
  }, []);

  async function updateDeliveryDelay(delayDelivery) {
    setTimeDelivery(delayDelivery);

    if (delayDelivery > 0) {
      const response = await api
        .put("/change/delay", {
          delay: parseFloat(delayDelivery),
        })
        .catch((error) => {
          if (error) toast.error("Erro ao mudar tempo de entrega!");
        });

      if (response.data) {
        sessionStorage.setItem("delay", response.data.delay);
      }
    }
  }

  async function updateWithdrawalDelay(delayRemove) {
    setTimeRemove(delayRemove);

    if (delayRemove > 0) {
      const response = await api
        .put("/change/delay/remove", {
          delay: parseFloat(delayRemove),
        })
        .catch((error) => {
          if (error) toast.error("Erro ao mudar tempo para retirada!");

          return error;
        });

      if (response.data) {
        setTimeRemove(response.data.delayRemove);
        sessionStorage.setItem("delayToWithdrawal", response.data.delayRemove);
      }
    }
  }

  return [
    showTimePopUp,
    setShowTimePopUp,
    showTimeRemovePopUp,
    setShowTimeRemovePopUp,
    showOpenedPopUp,
    setShowOpenedPopUp,
    timeRemove,
    timeDelivery,
    updateDeliveryDelay,
    updateWithdrawalDelay,
  ];
};
