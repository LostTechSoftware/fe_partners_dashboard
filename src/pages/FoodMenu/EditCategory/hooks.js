import { useEffect } from "react";
import { useState } from "react";
import api from "../../../services/api";

export const useEditCategory = ({ rowId, setAdditionals, additionals }) => {
  const [popUp1, setPopUp1] = useState(false);
  const [selectedRowAdditional, setSelectedRowAdditional] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const openPopUp1 = () => {
    setPopUp1(!popUp1);
  };

  async function getAdditinals() {
    setLoading(true);
    const response = await api.get(`/row/get/${rowId}`);
    const { data } = response;

    if (!data) return setLoading(false);

    const { additional } = data;
    setAdditionals(additional);
    setLoading(false);
  }

  useEffect(() => {
    getAdditinals();
  }, [rowId]);

  useEffect(() => {
    if (!reload && additionals.length) return;
    getAdditinals();
  }, [reload, rowId]);

  return [
    openPopUp1,
    popUp1,
    selectedRowAdditional,
    setSelectedRowAdditional,
    selectedIndex,
    setSelectedIndex,
    loading,
    setReload,
  ];
};
