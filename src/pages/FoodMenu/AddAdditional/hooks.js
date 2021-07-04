import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../services/api";

export const useAddAdditinal = ({ selectedAdditonal, uploadedFiles }) => {
  const [name, setName] = useState(selectedAdditonal.title);
  const [price, setPrice] = useState(
    selectedAdditonal.price ? selectedAdditonal.price : 0
  );
  const [loading, setLoading] = useState(false);

  async function updateOrCreateItem() {
    try {
      if (!price || !name)
        return toast.error("Preencha todas as informações com *");

      setLoading(true);
      toast.info("Salvando suas informações, aguarde");
      if (!selectedAdditonal._id) {
        try {
          const data = new FormData();

          data.append("title", name);
          data.append("OldPrice", price);

          if (uploadedFiles) data.append("avatar", uploadedFiles.file);

          await api.post(`/add/product/${selectedAdditonal}`, data);
          toast.success("Produto salvo!");
        } catch {
          toast.error("Erro ao salvar produto, tente novamente!");
        } finally {
          setLoading(false);
        }
        return;
      }
      const data = new FormData();

      data.append("title", name);

      data.append("OldPrice", price);

      if (uploadedFiles) data.append("avatar", uploadedFiles.file);

      await api.post(`/product/edit/${selectedAdditonal}`, data);

      toast.success("Produto salvo!");
    } catch {
      toast.error("Erro ao salvar produto, tente novamente!");
    } finally {
      setLoading(false);
    }
  }

  return [name, setName, price, setPrice];
};
