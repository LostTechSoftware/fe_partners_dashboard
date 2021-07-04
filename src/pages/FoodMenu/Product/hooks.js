import { useState, useEffect } from "react";
import api from "../../../services/api";

export const useProduct = ({ rowId, reload, setReload }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  async function pause(productId, index) {
    setLoading(true);

    const { data } = await api.post(`/product/pause/${productId}`);

    const updatedProducts = products;

    updatedProducts[index].paused = data.paused;

    setProducts(updatedProducts);
    setLoading(false);
  }

  async function getProducts() {
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
  }

  useEffect(() => {
    if (products.length && !reload) return;
    getProducts();
  }, [rowId, reload]);

  return [products, loading, pause];
};
