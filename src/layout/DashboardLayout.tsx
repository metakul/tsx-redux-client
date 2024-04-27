import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, useMediaQuery } from "@mui/material";

import navConfig from "./navConfig";
import Header from "./TopBar";
import MiniDrawer from "./Navigation/index";

import { Tabs } from '../DataTypes/enums';
import MobileTabNavigation from '../Components/MobileTabNav/mobileVIew';
import MetakulCollection from '../Components/Tab2/MetakulCollection';
import DexPage from '../Components/Tab3';
import Tab4 from "../Components/Tab4";


import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';

export default function DashboardLayout() {
  const isNonMobile = useMediaQuery("(min-width: 766px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showOutlet, setShowOutlet] = useState<boolean>(false);

  const handleSideBarState = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const tabs = [
    { value: <OtherHousesOutlinedIcon />, content: <Outlet />, label: Tabs.tabTitle1 },
    { value: <StoreOutlinedIcon />, content: <MetakulCollection />, label: Tabs.tabTitle2 },
    { value: <CategoryOutlinedIcon />, content: <DexPage />, label: Tabs.tabTitle3 },
    {
      value: <ContactEmergencyOutlinedIcon />, content:<Tab4/> , label: Tabs.tabTitle4
    },
  ];

  return (
    <Box>
      <Header setIsSidebarOpen={handleSideBarState} />
      <MiniDrawer
        setShowOutlet={setShowOutlet}
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={handleSideBarState}
        navConfig={navConfig}
      />
      <Container component="main" sx={{ flexGrow: 1, mt: 12, ml: "auto", mr: "auto" }}>
        <MobileTabNavigation showOutlet={showOutlet} tabs={tabs} />
      </Container>
    </Box>
  );
}
