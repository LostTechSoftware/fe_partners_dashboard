import { useEffect, useState, useCallback } from "react";

import api from "../../services/api";

export const useMenu = () => {
  const [expectedItensName, setExpectedItensName] = useState("");
  const [addProduct, setAddProduct] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [addAdditional, setAddAdditional] = useState(false);
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [reload, setReload] = useState(false);
  const [selectedRows, setSelectedRow] = useState({});
  const [selectedAdditonal, setSelectedAdditonal] = useState({});
  const [uploadedFiles, setUploadedFile] = useState(null);
  const [additionals, setAdditionals] = useState([]);

  const [itensList, setItensList] = useState([]);
  const [rows, setRows] = useState([]);
  const [remove, setRemove] = useState(false);

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  const ClickAdd = (additional) => {
    if (additional._id) setSelectedAdditonal(additional);
    setEditCategory(!editCategory);
    setAddAdditional(!addAdditional);
  };

  useEffect(() => {
    async function getItens() {
      if (!expectedItensName) {
        const { data } = await api.get(`/menu/restaurant/get`);

        const { rows } = data;
        setRows(rows);
        setLoading(false);
      } else {
        const response = await api.get(`/search/${expectedItensName}`);

        setItensList(response.data);
      }
    }

    getItens();
  }, [expectedItensName]);

  return [
    setAddCategory,
    setAddProduct,
    remove,
    setRemove,
    addProduct,
    addCategory,
    addAdditional,
    isMenuMobileOpened,
    handleMenuMobileOpen,
    editCategory,
    setEditCategory,
    ClickAdd,
    rows,
    loading,
    selectedProduct,
    setSelectedProduct,
    reload,
    setReload,
    selectedRows,
    setSelectedRow,
    selectedAdditonal,
    uploadedFiles,
    setUploadedFile,
    additionals,
    setAdditionals,
  ];
};
