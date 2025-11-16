import { Outlet } from "react-router";

import Panel from "@/components/layout/Panel";

const Layout = () => {
  const navSize = "56px";

  return (
    <div className="bg-background text-foreground flex justify-between h-screen">
      <Panel />

      <main
        className="flex-1 p-3"
        style={{ "--nav-size": navSize } as React.CSSProperties}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
