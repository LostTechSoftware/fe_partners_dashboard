import { useEffect, useState } from "react";
import api from "../../../services/api";

export const useAccess = () => {
  const [access, setAccess] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const obj = {
    0: "Dono (a)",
    1: "Gerente",
    2: "Atendente",
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    async function GetAccess() {
      setLoading(true);
      const { data } = await api.get("/partner/access");

      setAccess(data);
      setLoading(false);
    }
    GetAccess();
  }, []);

  return [getRandomColor, access, obj, showModal, setShowModal, loading];
};
