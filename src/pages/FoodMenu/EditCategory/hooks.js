import { useState } from "react";

export const useEditCategory = () => {
  const [popUp, setPopUp] = useState(false);
  const additionals = [1, 2, 3, 4];

  const openPopUp = () => {
    setPopUp(true);
  };

  return [additionals, openPopUp, popUp];
};
