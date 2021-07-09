import { useEffect, useState, useCallback } from "react";

import api from "../../services/api";

export const useMenu = () => {
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
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");
  const [popUp2, setPopUp2] = useState(false);

  const [rows, setRows] = useState([]);
  const [defaultRows, setDefaultRows] = useState([]);
  const [remove, setRemove] = useState(false);

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  const ClickAdd = (additional, index, additionalRow) => {
    if (additionalRow && additionalRow._id) {
      additionalRow.index = index;
      setSelectedRow(additionalRow);
    }
    if (additional && additional._id) setSelectedAdditonal(additional);
    setEditCategory(!editCategory);
    setAddAdditional(!addAdditional);
  };

  const search = async (textReceived) => {
    setText(textReceived);
    if (!textReceived) return;
    const { data } = await api.get(`/search/${textReceived}`);

    setProducts(data);
  };

  async function getItens() {
    const { data } = await api.get(`/menu/restaurant/get`);

    const { rows: rowsResponse } = data;

    setRows(rowsResponse);
    setDefaultRows(rowsResponse);
    setLoading(false);
  }

  const changeAvaliablyAllProduct = async (pause) => {
    setLoading(true);

    for (var i = 0; i < products.length; i++) {
      const { _id, paused } = products[i];

      if (!pause == paused) {
        const { data: dataProductPause1 } = await api.post(
          `/product/pause/${_id}`
        );

        const updatedProducts = products;

        updatedProducts[i].paused = dataProductPause1.paused;

        if (dataProductPause1.paused !== pause) {
          const { data: dataProductPause2 } = await api.post(
            `/product/pause/${_id}`
          );

          const updatedProducts2 = products;

          updatedProducts2[i].paused = dataProductPause2.paused;
        }

        setProducts(updatedProducts2);
      }
    }

    setLoading(false);
  };

  const openPopUp2 = () => {
    setPopUp2(!popUp2);
  };

  const action = (product) => {
    setAddProduct(true);
    if (product._id) setSelectedProduct(product);
  };

  useEffect(() => {
    if (rows.length && !reload) return;
    getItens();
  }, [reload]);

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
    search,
    products,
    action,
    text,
    changeAvaliablyAllProduct,
    openPopUp2,
    popUp2,
    defaultRows,
    setRows,
  ];
};
