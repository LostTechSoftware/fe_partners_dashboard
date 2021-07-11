import { useState, useCallback } from "react";
import { useHistory } from "react-router";

export const useSettings = () => {
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);
  const history = useHistory();

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  return [
    isMenuMobileOpened,
    setIsMenuMobileOpened,
    handleMenuMobileOpen,
    history,
  ];
};
