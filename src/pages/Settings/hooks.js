import { useEffect, useState, useCallback } from "react";

export const useSettings = () => {
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);

  const handleMenuMobileOpen = useCallback(() => {
    setIsMenuMobileOpened(!isMenuMobileOpened);
  }, [isMenuMobileOpened]);

  return [isMenuMobileOpened, setIsMenuMobileOpened, handleMenuMobileOpen];
};
