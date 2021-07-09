import { useState } from "react";
import api from "../../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useReorder = ({ rows, setReload }) => {
  const [items, setItems] = useState(rows);

  async function ReorderRows() {
    try {
      setTimeout(setReload(true), 5000);

      if (!items) {
        return toast.error(
          "Faça alguma edição para que possamos salvar, ou cancele"
        );
      }
      await api.post("/reorder/rows", { rows: items });

      toast.success("Categorias reordenadas");
    } catch (error) {
      toast.error("Erro em reordenar, tente novamente!");
    }
    setReload(false);
  }

  return [setItems, ReorderRows];
};
