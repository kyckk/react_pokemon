import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import * as MyLayout from "../lib/MyLayout";
import Dialog from "../component/Dialog"
const Page = ({ header, children }) => {
  const { setDialog ,setPosition } = useContext(MyLayout.LayoutContext); // context에서 setDialog 가져오기

  // 버튼 클릭 시 실행될 함수
  const changeDialog = () => {
    setPosition("side"); // 새로운 다이얼로그 컴포넌트를 설정
    setDialog(<Dialog/>)
  };

  return (
    <div>
      {header}
      {children}
      <MyLayout.DialogContainer /> {/* 현재 상태의 다이얼로그를 렌더링 */}
      <div>
        <Button onClick={changeDialog}>Change Dialog</Button> {/* 버튼 클릭 시 다이얼로그 변경 */}
      </div>
    </div>
  );
};

export default Page;