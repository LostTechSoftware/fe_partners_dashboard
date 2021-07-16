import { useState, useEffect } from "react";
import { getLevel } from "../../services/getLevel";
import { useHistory } from "react-router-dom";

export const useMenu = () => {
  const [toggled, setToggled] = useState(false);
  const [level, setLevel] = useState(2);
  const [menuOptions, setMenuOptions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getLevelResponse() {
      const levelResponse = await getLevel();

      if ([0, 1, 2].includes(levelResponse)) {
        setLevel(levelResponse);
      }
    }

    const getMenuOptions = () => {
      if (level <= 1) {
        return setMenuOptions([
          { text: "Pedidos", route: "requests" },
          { text: "Mensagens", route: "messages" },
          // { text: "Mapa", route: "" },
          // { text: "Impulsionar", route: "" },
          { text: "Produtos", route: "menu" },
          { text: "Finanças", route: "finance" },
        ]);
      }

      if (level <= 2) {
        return setMenuOptions([
          { text: "Pedidos", route: "requests" },
          { text: "Mensagens", route: "messages" },
          // { text: "Mapa", route: "" },
          // { text: "Impulsionar", route: "" },
          { text: "Produtos", route: "menu" },
          // { text: "Finanças", route: "finance" },
        ]);
      }
    };

    getLevelResponse();
    getMenuOptions();
  }, [level]);

  function logout() {
    sessionStorage.clear();

    history.push("/");
  }

  return {
    menuOptions,
    toggled,
    setToggled,
    level,
    logout,
  };
};
