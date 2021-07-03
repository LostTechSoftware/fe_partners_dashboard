import { useEffect, useState } from "react";

import api from "../../services/api";

export const useMenu = () => {
  const [expectedItensName, setExpectedItensName] = useState("");
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [itensList, setItensList] = useState([]);
  const [remove, setRemove] = useState(false);

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
    modalIsOpened,
    setModalIsOpened,
    remove,
    setRemove,
    loading,
    setLoading,
  ];
};
