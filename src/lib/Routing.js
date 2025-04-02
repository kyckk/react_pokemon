import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/detail";
import List from "../pages/List";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Detail />}></Route>
        <Route path="/Detail" element={<Detail />}></Route>
        <Route path="/List" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
