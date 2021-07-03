import { useEffect, useState, useCallback } from "react";

import api from "../../services/api";

export const useMenu = () => {
  const [expectedItensName, setExpectedItensName] = useState("");
  const [addProduct, setAddProduct] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [addAdditional, setAddAdditional] = useState(false);
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);
  const [editCategory, setEditCategory] = useState(false);

  const [itensList, setItensList] = useState([]);
  const [remove, setRemove] = useState(false);

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  const ClickAdd = () => {
    setEditCategory(!editCategory);
    setAddAdditional(!addAdditional);
  };

  useEffect(() => {
    async function getItens() {
      if (!expectedItensName) {
        const response = await api.get(`/menu/restaurant/get`);

        setItensList(response.data);
      } else {
        const response = await api.get(`/search/${expectedItensName}`);

        setItensList(response.data);
      }
    }

    getItens();
  }, [expectedItensName]);

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  return [
    setAddCategory,
    setAddProduct,
    remove,
    setRemove,
    loading,
    addProduct,
    addCategory,
    addAdditional,
    setAddAdditional,
    isMenuMobileOpened,
    handleMenuMobileOpen,
    editCategory,
    setEditCategory,
    ClickAdd,
  ];
};
