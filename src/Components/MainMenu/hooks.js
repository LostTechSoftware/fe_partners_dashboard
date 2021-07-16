import { useMemo, useState } from "react";

export const useMenu = () => {
  const [toggled, setToggled] = useState(false);

  const menuOptions = useMemo(() => {
    return [
      { text: "Pedidos", route: "requests" },
      { text: "Mensagens", route: "messages" },
      // { text: "Mapa", route: "" },
      // { text: "Impulsionar", route: "" },
      { text: "Produtos", route: "menu" },
      { text: "Finanças", route: "finance" },
    ];
  }, []);

  return {
    menuOptions,
    toggled,
    setToggled,
  };
};
