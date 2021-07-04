import { useEffect } from "react";
import { useState } from "react";
import api from "../../../services/api";

export const useEditCategory = ({ rowId, setAdditionals }) => {
  const [popUp, setPopUp] = useState(false);

  const openPopUp = () => {
    setPopUp(true);
  };

  useEffect(() => {
    async function getAdditinals() {
      const { data } = await api.get(`/row/get/${rowId}`);

      const { additional } = data;
      setAdditionals(additional);
    }
    getAdditinals();
  }, []);

  return [openPopUp];
};
