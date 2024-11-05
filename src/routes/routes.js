import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";

function myRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default myRoutes;
