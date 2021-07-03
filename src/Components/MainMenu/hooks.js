import { useState, useCallback, useMemo } from "react";

export const useMenu = () => {
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  const menuOptions = useMemo(() => {
    return [
      { text: "Pedidos", route: "/requests" },
      { text: "Mensagens", route: "" },
      { text: "Mapa", route: "" },
      { text: "Impulsionar", route: "" },
      { text: "Produtos", route: "/menu" },
      { text: "Finanças", route: "/money" },
    ];
  }, []);

  return {
    isMenuMobileOpened,
    handleMenuMobileOpen,
    menuOptions,
  };
};
