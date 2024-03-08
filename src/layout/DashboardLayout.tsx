import { useState } from "react";
import { Outlet } from "react-router-dom";

// import navConfig from "./navConfig";
const APP_BAR_MOBILE = 64;
// const APP_BAR_DESKTOP = 92;
import Header from "./TopBar";
export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <div>
        <Header
          onOpenNav={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div style={{
          marginTop: APP_BAR_MOBILE
        }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
