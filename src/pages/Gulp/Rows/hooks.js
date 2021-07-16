import { useState } from "react";
import api from "../../../services/api";

export const useRows = ({ row, setSelectedProduct, setAddProduct }) => {
  const rowBasicInfo = row;
  const [rowPaused, setRowPaused] = useState(row.paused);
  const [loadingAction, setLoadingAction] = useState(false);

  async function changeRowAvaliably(id) {
    setLoadingAction(true);
    const { data } = await api.post(`/pause/row/${id}`);

    const { paused } = data;

    setRowPaused(paused);
    setLoadingAction(false);
  }

  const action = (product) => {
    setAddProduct(true);
    if (product._id) setSelectedProduct(product);
  };

  return [rowBasicInfo, rowPaused, changeRowAvaliably, loadingAction, action];
};
