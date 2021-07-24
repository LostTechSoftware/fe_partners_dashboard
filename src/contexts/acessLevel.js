import React, { createContext, useEffect, useState } from "react";
import { getLevel } from "../services/getLevel";

const AuthContext = createContext({ level: 2 });

export const AuthProvider = ({ children }) => {
  const [level, setLevel] = useState(2);

  useEffect(() => {
    async function isLogged() {
      setLevel(await getLevel());
    }
    isLogged();
  }, []);

  return (
    <AuthContext.Provider value={{ level, setLevel }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
