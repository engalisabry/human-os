import { Outlet } from "react-router";

import Sidebar from "@/components/layout/Sidebar";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
