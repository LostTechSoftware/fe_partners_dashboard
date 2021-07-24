import React, { createContext, useState } from "react";

const OpenedContext = createContext({
  restaurantIsOpen: false,
  removeOption: false,
});

export const OpenedProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [remove, setRemove] = useState(false);
  const [isConecting, setIsConecting] = useState(false);

  return (
    <OpenedContext.Provider
      value={{
        opened,
        setOpened,
        remove,
        setRemove,
        isConecting,
        setIsConecting,
      }}
    >
      {children}
    </OpenedContext.Provider>
  );
};

export default OpenedContext;
