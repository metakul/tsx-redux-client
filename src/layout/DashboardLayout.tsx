import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, useMediaQuery } from "@mui/material";

import navConfig from "./navConfig";
const APP_BAR_MOBILE = 8;
// const APP_BAR_DESKTOP = 92;
import Header from "./TopBar";
import MiniDrawer from "./Navigation/index"
export default function DashboardLayout() {

  const isNonMobile = useMediaQuery("(min-width: 766px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSideBarState = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }


  return (
    <Box >
      <Header
        setIsSidebarOpen={handleSideBarState}
        
      />
      <MiniDrawer isNonMobile={isNonMobile} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={handleSideBarState} navConfig={navConfig} />
      <Container component="main" sx={{
        flexGrow: 1,
        mt: APP_BAR_MOBILE,
        ml:"auto",
        mr:"auto",
      }}>
        <Outlet />
      </Container>
    </Box>
  );
}
