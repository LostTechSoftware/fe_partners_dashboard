import { useState, useEffect } from "react";
import api from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useAddProduct = ({ product, setReload, rows }) => {
  const [price, setPrice] = useState("");
  const [name, setName] = useState(product.title ? product.title : "");
  const [description, setDescription] = useState(
    product.description ? product.description : ""
  );
  const [promotion, setPromotion] = useState(
    product.promotion ? product.promotion : false
  );
  const [promotionalPrice, setPromotionalPrice] = useState(
    product.price ? product.price : ""
  );
  const [daysActive, setDaysActive] = useState({
    segunda: { active: false },
    terca: { active: false },
    quarta: { active: false },
    quinta: { active: false },
    sexta: { active: false },
    sabado: { active: false },
    domingo: { active: false },
  });
  const [clicks, setClicks] = useState(0);
  const [uploadedFiles, setUploadedFile] = useState(null);
  const [rowSelected, setRowSelected] = useState(rows[0]._id);
  const [loading, setLoading] = useState(false);
  const [showDays, setShowDays] = useState(false);

  const deleteProductAvatar = async () => {
    try {
      setLoading(true);
      toast.info("Salvando suas informações, aguarde");

      await api.delete(`/product/delete/avatar/${product._id}`);

      toast.success("Imagem removida!");
      setReload(true);
    } catch {
      toast.error("Erro ao salvar produto, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  async function updateOrCreateItem() {
    try {
      if (!price || !name || !description)
        return toast.error("Preencha todas as informações com *");

      setLoading(true);
      toast.info("Salvando suas informações, aguarde");
      if (!product._id) {
        try {
          const data = new FormData();

          data.append("title", name);
          data.append("price", parseFloat(promotionalPrice || price));
          data.append("description", description);
          data.append("daysActive", JSON.stringify(daysActive));
          data.append("promotion", promotion);
          data.append("OldPrice", price);
          data.append("schedule", showDays);

          if (uploadedFiles) data.append("avatar", uploadedFiles.file);

          await api.post(`/add/product/${rowSelected}`, data);
          setReload(true);
          toast.success("Produto salvo!");
        } catch {
          toast.error("Erro ao salvar produto, tente novamente!");
        } finally {
          setLoading(false);
        }
        return;
      }
      const dataEdit = new FormData();

      dataEdit.append("title", name);
      dataEdit.append("price", parseFloat(promotionalPrice || price));
      dataEdit.append("description", description);
      dataEdit.append("daysActive", JSON.stringify(daysActive));
      dataEdit.append("promotion", promotion);
      dataEdit.append("OldPrice", price);
      dataEdit.append("schedule", showDays);

      if (uploadedFiles) dataEdit.append("avatar", uploadedFiles.file);

      await api.post(`/product/edit/${product._id}`, dataEdit);

      setReload(true);

      toast.success("Produto salvo!");
    } catch {
      toast.error("Erro ao salvar produto, tente novamente!");
    } finally {
      setLoading(false);
    }
  }

  const selectDay = (day, productReceived) => {
    if (day === "segunda") productReceived.segunda = true;

    if (day === "terca") productReceived.terca = true;

    if (day === "quarta") productReceived.quarta = true;

    if (day === "quinta") productReceived.quinta = true;

    if (day === "sexta") productReceived.sexta = true;

    if (day === "sabado") productReceived.sabado = true;

    if (day === "domingo") productReceived.domingo = true;

    const updated = daysActive;

    daysActive[day].active = !daysActive[day].active;
    setDaysActive(updated);
    setClicks(clicks + 1);

    return daysActive;
  };

  useEffect(() => {
    const getSelected = () => {
      if (product.segunda) {
        const updated = daysActive;

        daysActive["segunda"].active = !daysActive["segunda"].active;
        setDaysActive(updated);
      }
      if (product.terca) {
        const updated = daysActive;

        daysActive.terca.active = !daysActive["terca"].active;
        setDaysActive(updated);
      }
      if (product.quarta) {
        const updated = daysActive;

        daysActive.quarta.active = !daysActive.quarta.active;
        setDaysActive(updated);
      }
      if (product.quinta) {
        const updated = daysActive;

        daysActive["quinta"].active = !daysActive["quinta"].active;
        setDaysActive(updated);
      }
      if (product.sexta) {
        const updated = daysActive;

        daysActive.sexta.active = !daysActive["sexta"].active;
        setDaysActive(updated);
      }
      if (product.sabado) {
        const updated = daysActive;

        daysActive.sabado.active = !daysActive["sabado"].active;
        setDaysActive(updated);
      }
      if (product.domingo) {
        const updated = daysActive;

        daysActive["domingo"].active = !daysActive["domingo"].active;
        setDaysActive(updated);
      }
    };
    getSelected();
  }, []);

  useEffect(() => {
    if (product.OldPrice) setPrice(product.OldPrice);

    if (product.price) setPrice(product.price);
  }, [product]);

  const days = [
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo",
  ];

  const deleteItem = async () => {
    try {
      setReload(false);
      await api.delete(`/delete/product/${product._id}`);
      setReload(true);
      toast.success("Produto deletado!");
    } catch {
      toast.error("Erro ao deletar produto, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  return {
    days,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    promotion,
    setPromotion,
    promotionalPrice,
    setPromotionalPrice,
    selectDay,
    daysActive,
    uploadedFiles,
    setUploadedFile,
    updateOrCreateItem,
    rowSelected,
    deleteProductAvatar,
    setRowSelected,
    loading,
    showDays,
    setShowDays,
    deleteItem,
  };
};
