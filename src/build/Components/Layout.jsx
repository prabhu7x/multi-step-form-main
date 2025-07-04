import { Outlet } from "react-router-dom";
import Sidebar from "../process/Sidebar";

function Layout() {
  return (
    <div className="app">
      <div className="wrapper">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
