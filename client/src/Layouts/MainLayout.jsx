import React from "react";
import { Outlet } from "react-router-dom";
import Navs from "../components/Navs";
import Footer from "../components/Footer";
function MainLayout() {
  return (
    <div>
      <Navs />

      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
