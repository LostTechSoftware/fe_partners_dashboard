import { useState, useCallback } from "react";
import { useHistory } from "react-router";

export const useScala = () => {
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);

  const history = useHistory();

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  return [isMenuMobileOpened, handleMenuMobileOpen, history];
};
