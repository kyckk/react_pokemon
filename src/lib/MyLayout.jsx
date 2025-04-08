import React, { useState, createContext, useContext } from "react";
import BackDrop from "../component/BackDrop";


export const LayoutContext = createContext();

export const Layout = ({ children }) => {
  const [dialog, setDialog] = useState(null);
  const value = { dialog, setDialog };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
};

export const DialogContainer = () => {
  const { dialog } = useContext(LayoutContext);

  return dialog ? <BackDrop>{dialog}</BackDrop> : null;
};


