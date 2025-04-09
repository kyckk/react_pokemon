import React, { useState, createContext, useContext } from "react";
import BackDrop from "../component/BackDrop";
import Dialog from "../component/Dialog";

export const LayoutContext = createContext();

export const Layout = ({ children }) => {
  const [dialog, setDialog] = useState(null);
  const openDialog = setDialog;
  const closeDialog = () => setDialog(null);

  const startLoading = (message) =>
          openDialog(<Dialog>{message}</Dialog>);
  const finishLoading = closeDialog;

  const value = { dialog, setDialog ,closeDialog,startLoading,finishLoading};

 
  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
};

export const DialogContainer = () => {
  const { dialog,setDialog } = useContext(LayoutContext);
  const handleBackdropClick = (event) => {
    // 다이얼로그 외부를 클릭했을 때 다이얼로그를 닫음
    if (event.target === event.currentTarget) {
      setDialog(null)
    }
  };
  return dialog ? <BackDrop  onClick={handleBackdropClick}>{dialog}</BackDrop> : null;
};

