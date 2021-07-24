import React, { createContext, useState } from "react";

const OpenedContext = createContext({
  restaurantIsOpen: false,
  removeOption: false,
});

export const OpenedProvider = ({ children }) => {
  const [restaurantIsOpen, setRestaurantIsOpen] = useState(false);
  const [removeOption, setRemoveOption] = useState(false);

  return (
    <OpenedContext.Provider
      value={{
        restaurantIsOpen,
        setRestaurantIsOpen,
        removeOption,
        setRemoveOption,
      }}
    >
      {children}
    </OpenedContext.Provider>
  );
};

export default OpenedContext;
