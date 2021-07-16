import { useMemo, useState, useEffect } from "react";
import { getLevel } from "../../services/getLevel";
import { useHistory } from "react-router-dom";

export const useMenu = () => {
  const [toggled, setToggled] = useState(false);
  const [level, setLevel] = useState(2);
  const history = useHistory();

  useEffect(() => {
    async function getLevelResponse() {
      const levelResponse = await getLevel();

      setLevel(levelResponse);
    }
    getLevelResponse();
  }, []);

  function logout() {
    sessionStorage.clear();

    history.push("/");
  }

  const menuOptions = useMemo(() => {
    if (level <= 1) {
      return [
        { text: "Pedidos", route: "requests" },
        { text: "Mensagens", route: "messages" },
        // { text: "Mapa", route: "" },
        // { text: "Impulsionar", route: "" },
        { text: "Produtos", route: "menu" },
        { text: "Finanças", route: "money" },
      ];
    }

    if (level <= 2) {
      return [
        { text: "Pedidos", route: "requests" },
        { text: "Mensagens", route: "messages" },
        // { text: "Mapa", route: "" },
        // { text: "Impulsionar", route: "" },
        { text: "Produtos", route: "menu" },
        // { text: "Finanças", route: "money" },
      ];
    }
  }, []);

  return {
    menuOptions,
    toggled,
    setToggled,
    level,
    logout,
  };
};
