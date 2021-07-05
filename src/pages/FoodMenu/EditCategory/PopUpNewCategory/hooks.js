import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useNewCategory = ({
  selectedRowAdditional,
  setAdditionals,
  additionals,
  index,
  setReload,
  selectedRows,
}) => {
  const [name, setName] = useState("");
  const [mandatory, setMandatory] = useState(false);
  const [max, setMax] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedRowAdditional.title) setName(selectedRowAdditional.title);
    if (selectedRowAdditional.mandatory)
      setMandatory(selectedRowAdditional.mandatory);
    if (selectedRowAdditional.numberSelect)
      setMax(selectedRowAdditional.numberSelect);
  }, [selectedRowAdditional]);

  const updateOrCreateItem = async () => {
    setLoading(true);
    setReload(true);

    if (max <= 0) {
      setLoading(false);
      setReload(false);

      return toast.error("O máximo não pode ser menor ou igual a zero");
    }
    if (selectedRowAdditional._id) {
      try {
        await api.put(`/additional/row/${selectedRowAdditional._id}`, {
          title: name,
          mandatory,
          numberSelect: max,
        });

        const updated = additionals;

        updated[index].title = name;
        updated[index].mandatory = mandatory;
        updated[index].numberSelect = max;

        setAdditionals(updated);
        toast.success("Categoria editada");
      } catch (error) {
        toast.error("Erro ao editar adicional, tente novamente");
      }
      setLoading(false);
      setReload(false);
      return;
    }
    try {
      await api.post(`/additional/row/${selectedRows._id}`, {
        title: name,
        mandatory,
        numberSelect: max,
      });

      toast.success("Categoria criada");
    } catch {
      toast.error("Erro ao criar adicional, tente novamente");
    }
    setLoading(false);
    setReload(false);
  };

  return [
    name,
    setName,
    mandatory,
    setMandatory,
    max,
    setMax,
    updateOrCreateItem,
    loading,
  ];
};
