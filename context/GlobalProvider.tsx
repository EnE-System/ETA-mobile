import React, { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext(null);
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }:any) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  

  return (
    <GlobalContext.Provider
  value={null}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;