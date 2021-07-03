import { useState } from "react";

export const useProduct = () => {
  const products = [1, 2, 3, 4, 5, 6, 7];
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  return [products, loading];
};
