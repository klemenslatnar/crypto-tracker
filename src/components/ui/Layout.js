import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
