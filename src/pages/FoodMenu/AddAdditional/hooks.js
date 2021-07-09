import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../services/api";

export const useAddAdditinal = ({
  selectedAdditonal,
  uploadedFiles,
  selectedRows,
  rows,
}) => {
  const [name, setName] = useState(
    selectedAdditonal.title ? selectedAdditonal.title : ""
  );
  const [price, setPrice] = useState(
    selectedAdditonal.price ? selectedAdditonal.price : 0
  );
  const [loading, setLoading] = useState(false);
  const [rowId, setRowId] = useState(rows[0]);

  async function updateOrCreateItem() {
    try {
      setLoading(true);
      if (price < 0) {
        setLoading(false);

        return toast.error("O preço não pode ser menor que zero");
      }
      if (!name) return toast.error("Preencha todas as informações com *");

      toast.info("Salvando suas informações, aguarde");
      if (!selectedAdditonal._id) {
        try {
          const data = new FormData();

          data.append("title", name);
          data.append("price", price);

          if (uploadedFiles) data.append("avatar", uploadedFiles.file);

          await api.post(`/additional/${selectedRows._id}`, data);
          toast.success("Adicinal salvo!");
        } catch {
          toast.error("Erro ao salvar Adicinal, tente novamente!");
        } finally {
          setLoading(false);
        }
        return;
      }
      const data = new FormData();

      data.append("title", name);

      data.append("price", price);

      if (uploadedFiles) data.append("avatar", uploadedFiles.file);

      await api.post(
        `/edit/additional/${selectedRows._id}/${selectedAdditonal._id}`,
        data
      );

      toast.success("Adicional salvo!");
    } catch {
      toast.error("Erro ao salvar Adicinal, tente novamente!");
    } finally {
      setLoading(false);
    }
  }

  return [
    name,
    setName,
    price,
    setPrice,
    updateOrCreateItem,
    loading,
    rowId,
    setRowId,
  ];
};
