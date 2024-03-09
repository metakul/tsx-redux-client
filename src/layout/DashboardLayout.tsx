import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import navConfig from "./navConfig";
const APP_BAR_MOBILE = 8;
// const APP_BAR_DESKTOP = 92;
import Header from "./TopBar";
import MiniDrawer from "./Navigation/index"
export default function DashboardLayout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSideBarState = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }


  return (
    <Box >
      <Header
        onOpenNav={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <MiniDrawer isSidebarOpen={isSidebarOpen} setIsSidebarOpen={handleSideBarState} navConfig={navConfig} />
      <Box component="main" sx={{
        flexGrow: 1,
        mt: APP_BAR_MOBILE,
      }}>
        <Outlet />
      </Box>
    </Box>
  );
}
