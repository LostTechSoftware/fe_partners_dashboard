import { useState, useEffect, useRef } from "react";
import api from "../../../services/api";
import { toast } from "../../../Components/Toast";

export const useAddProduct = ({ product, setReload, rows }) => {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState(product.title ? product.title : "");
  const [description, setDescription] = useState(
    product.description ? product.description : ""
  );
  const [promotion, setPromotion] = useState(
    product.promotion ? product.promotion : false
  );
  const [promotionalPrice, setPromotionalPrice] = useState(
    product.price ? product.price : 0
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
  const [priceInputPosition, setPriceInputPosition] = useState(0);
  const [
    promotionalPriceInputPosition,
    setPromotionalPriceInputPosition,
  ] = useState(0);
  const promotionalPriceInputRef = useRef(null);
  const priceInputRef = useRef(null);

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

  function handlePriceChange(event) {
    const position = event.target.selectionStart;
    let formatedPrice = event.target.value;

    // define for wrong cursor position when (value >= 100)
    if (position > 2) setPriceInputPosition(position);
    else setPriceInputPosition(4);

    // Remove separação de centena e troca ',' por '.'
    formatedPrice = formatedPrice.replace(/\./g, "");
    formatedPrice = formatedPrice.replace(/,/g, ".");

    // keep only numbers and 1 dot
    formatedPrice = formatedPrice.replace(/[^0-9\.]|\.(?=\.)/g, "");

    // erase a zero when finds 3 number for cents
    formatedPrice = formatedPrice.replace(/0(?=([1-9]{0,2})$)/g, "");

    // add a dot before last two number with no dot finded
    const dotNotfinded = formatedPrice.indexOf(".") === -1;
    if (dotNotfinded) {
      let arrayPrice = formatedPrice.split("");
      arrayPrice.push(arrayPrice[arrayPrice.length - 1]);
      arrayPrice[arrayPrice.length - 2] = arrayPrice[arrayPrice.length - 3];
      arrayPrice[arrayPrice.length - 3] = ".";
      formatedPrice = arrayPrice.join("");
    }

    if (formatedPrice) setPrice(formatedPrice);
    else setPrice(0);
  }

  function handlePromotionalPriceChange(event) {
    const position = event.target.selectionStart;
    let formatedPrice = event.target.value;

    // define for wrong cursor position when (value >= 100)
    if (position > 2) setPromotionalPriceInputPosition(position);
    else setPromotionalPriceInputPosition(4);

    // Remove separação de centena e troca ',' por '.'
    formatedPrice = formatedPrice.replace(/\./g, "");
    formatedPrice = formatedPrice.replace(/,/g, ".");

    // keep only numbers and 1 dot
    formatedPrice = formatedPrice.replace(/[^0-9\.]|\.(?=\.)/g, "");

    // erase a zero when finds 3 number for cents
    formatedPrice = formatedPrice.replace(/0(?=([1-9]{0,2})$)/g, "");

    // add a dot before last two number with no dot finded
    const dotNotfinded = formatedPrice.indexOf(".") === -1;
    if (dotNotfinded) {
      let arrayPrice = formatedPrice.split("");
      arrayPrice.push(arrayPrice[arrayPrice.length - 1]);
      arrayPrice[arrayPrice.length - 2] = arrayPrice[arrayPrice.length - 3];
      arrayPrice[arrayPrice.length - 3] = ".";
      formatedPrice = arrayPrice.join("");
    }

    if (formatedPrice) setPromotionalPrice(formatedPrice);
    else setPromotionalPrice(0);
  }

  useEffect(() => {
    priceInputRef.current.selectionStart = priceInputPosition;
    priceInputRef.current.selectionEnd = priceInputPosition;

    if (promotionalPriceInputRef.current) {
      promotionalPriceInputRef.current.selectionStart = promotionalPriceInputPosition;
      promotionalPriceInputRef.current.selectionEnd = promotionalPriceInputPosition;
    }
  }, [priceInputPosition, promotionalPriceInputPosition]);

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
          data.append(
            "price",
            promotion
              ? parseFloat(promotionalPrice || price)
              : parseFloat(price)
          );
          data.append("description", description);
          data.append("daysActive", JSON.stringify(daysActive));
          data.append("promotion", promotion);
          data.append("OldPrice", promotion ? price : 0);
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
      dataEdit.append(
        "price",
        promotion ? parseFloat(promotionalPrice || price) : parseFloat(price)
      );
      dataEdit.append("description", description);
      dataEdit.append("daysActive", JSON.stringify(daysActive));
      dataEdit.append("promotion", promotion);
      dataEdit.append("OldPrice", promotion ? price : 0);
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
    promotion,
    setPromotion,
    promotionalPrice,
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
    handlePriceChange,
    priceInputRef,
    handlePromotionalPriceChange,
    promotionalPriceInputRef,
  };
};
