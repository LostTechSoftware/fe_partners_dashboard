import { useState } from "react";

export const useHeader = () => {
  const [opened, setOpened] = useState(false);
  const [remove, setRemove] = useState(false);

  const [showTimePopUp, setShowTimePopUp] = useState(false);
  const [showTimeRemovePopUp, setShowTimeRemovePopUp] = useState(false);
  const [showOpenedPopUp, setShowOpenedPopUp] = useState(false);

  return [
    opened,
    setOpened,
    remove,
    setRemove,
    showTimePopUp,
    setShowTimePopUp,
    showTimeRemovePopUp,
    setShowTimeRemovePopUp,
    showOpenedPopUp,
    setShowOpenedPopUp,
  ];
};
