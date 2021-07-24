import { useState, useEffect } from "react";
import { toast } from "../../../Components/Toast";

import api from "../../../services/api";

export const usePartnerSettings = () => {
  const [settings, setSettings] = useState("");
  const [withdrawalDelay, setWithdrawalDelay] = useState(0);
  const [deliveryDelay, setDeliveryDelay] = useState(0);
  const [click, setClick] = useState(0);

  async function updateSettingsFee(newValue, key) {
    const newObj = settings;

    newObj[key] = newValue;

    setSettings(newObj);
    setClick(click + 1);

    await api.post("/partner/settings", { ...settings });
  }

  useEffect(() => {
    async function GetSettings() {
      const { data } = await api.get("/partner/settings");

      setSettings(data);
      setDeliveryDelay(data.delay);
      setWithdrawalDelay(data.delayRemove);
    }
    GetSettings();
  }, []);

  async function updateDeliveryDelay(delayDelivery) {
    setDeliveryDelay(delayDelivery);

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
    setWithdrawalDelay(delayRemove);

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
        setWithdrawalDelay(response.data.delayRemove);
        sessionStorage.setItem("delayToWithdrawal", response.data.delayRemove);
      }
    }
  }

  return [
    updateDeliveryDelay,
    updateWithdrawalDelay,
    settings,
    withdrawalDelay,
    deliveryDelay,
    updateSettingsFee,
  ];
};
