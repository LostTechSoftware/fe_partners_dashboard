import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../services/api";

export const useAddCategory = () => {
  const [title, setTitle] = useState("");

  const addNewCategory = async () => {
    try {
      await api.post(`/add/rows`, {
        title,
      });

      toast.success("Categoria adicionada");
    } catch {
      toast.error("Erro ao criar categoria, tente novamente");
    }
  };

  return [title, setTitle, addNewCategory];
};
