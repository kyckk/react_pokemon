import React, { createContext, useState, useContext } from "react";
import BackDrop from "../component/BackDrop";

// 컨텍스트 생성
export const LayoutContext = createContext({});
LayoutContext.displayName = "LayoutContext";

// Layout 컴포넌트: 상태 관리 및 Context Provider 제공
export const Layout = ({ children }) => {
  const [dialog, setDialog] = useState("");
  console.log(children)
  const value = {
    dialog,
    setDialog, // 필요 시 하위에서 dialog 업데이트 가능
  };
 
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



