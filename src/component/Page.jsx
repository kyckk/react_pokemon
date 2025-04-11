import React from "react";
import * as MyLayout from "../lib/MyLayout";

const Page = ({ header, children }) => {
  return (
    <div>
      {header}
      {children}
      <MyLayout.DialogContainer /> {/* 현재 상태의 다이얼로그를 렌더링 */}
    </div>
  );
};

export default Page;
