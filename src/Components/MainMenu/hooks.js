import { useMemo } from "react";

export const useMenu = () => {
  const menuOptions = useMemo(() => {
    return [
      { text: "Pedidos", route: "requests" },
      { text: "Mensagens", route: "" },
      // { text: "Mapa", route: "" },
      // { text: "Impulsionar", route: "" },
      { text: "Produtos", route: "menu" },
      { text: "Finanças", route: "money" },
    ];
  }, []);

  return {
    menuOptions,
  };
};
