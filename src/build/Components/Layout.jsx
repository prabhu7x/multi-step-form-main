import { Outlet } from "react-router-dom";
import Tracker from "../process/Tracker";

import React from "react";

function Layout() {
  return (
    <>
      <Tracker />
      <Outlet />
    </>
  );
}

export default Layout;
