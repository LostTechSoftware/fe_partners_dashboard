import { useState, useEffect } from "react";
import api from "../../../services/api";

export const useProduct = ({
  rowId,
  reload,
  setReload,
  defaultProducts,
  search,
  defaultLoading,
}) => {
  const [loading, setLoading] = useState(search ? false : true);
  const [products, setProducts] = useState(defaultProducts);

  async function pause(productId, index) {
    setLoading(true);

    const { data } = await api.post(`/product/pause/${productId}`);

    const updatedProducts = products;

    updatedProducts[index].paused = data.paused;

    setProducts(updatedProducts);
    setLoading(false);
  }

  useEffect(() => {
    if (!search) return;
    setProducts(defaultProducts);
    setLoading(defaultLoading);
  }, [defaultProducts, defaultLoading]);

  useEffect(() => {
    if (products.length && !reload) return;
    if (search) return;

    setTimeout(async function getProducts() {
      try {
        setLoading(true);

        const { data } = await api.get(`/row/get/${rowId}`);

        const { products } = data;

        setProducts(products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      } finally {
        setReload(false);
      }
    }, 2000);
  }, [rowId, reload]);

  return [products, loading, pause];
};
