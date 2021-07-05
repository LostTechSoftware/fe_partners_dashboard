import { useEffect } from "react";
import { useState } from "react";
import api from "../../../services/api";

export const useEditCategory = ({ rowId, setAdditionals, additionals }) => {
  const [popUp1, setPopUp1] = useState(false);
  const [popUp2, setPopUp2] = useState(false);
  const [selectedRowAdditional, setSelectedRowAdditional] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const openPopUp1 = () => {
    setPopUp1(!popUp1);
  };

  const openPopUp2 = () => {
    setPopUp2(!popUp2);
  };

  async function getAdditinals() {
    setLoading(true);
    const { data } = await api.get(`/row/get/${rowId}`);

    const { additional } = data;
    setAdditionals(additional);
    setLoading(false);
  }

  console.log(rowId);

  useEffect(() => {
    getAdditinals();
  }, [rowId]);

  useEffect(() => {
    if (!reload && additionals.length) return;
    getAdditinals();
  }, [reload, rowId]);

  return [
    openPopUp1,
    openPopUp2,
    popUp1,
    popUp2,
    selectedRowAdditional,
    setSelectedRowAdditional,
    selectedIndex,
    setSelectedIndex,
    loading,
    setReload,
  ];
};
