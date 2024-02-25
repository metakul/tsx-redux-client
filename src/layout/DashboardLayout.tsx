import  { useState } from "react";
import { Outlet } from "react-router-dom";

import Topbar from "../Components/Global/Topbar";
import navConfig from "./navConfig";
import Nav from "../Components/Global/Nav";

// const APP_BAR_MOBILE = 64;
// const APP_BAR_DESKTOP = 92;


export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // $TODO set page info based on if is mobile or Non Mobile
  const [isNonMobile, setIsNonMobile] = useState(true)

  // $TODO add a searchbar to search WholeWebsite

  const onSearch = () => {
  // $TODO Implement  search logic here
    console.log("Searching...");
    setIsNonMobile(true)
  };


  return (
    <>
      <div>
        <Topbar
          isSidebarOpen={isSidebarOpen}
          isNonMobile={isNonMobile}
          setIsSidebarOpen={setIsSidebarOpen}
          drawerWidth="250px"
          onSearch={onSearch}
          />
        <Nav
          isSidebarOpen={isSidebarOpen}
          isNonMobile={isNonMobile}
          setIsSidebarOpen={() => setIsSidebarOpen(false)}
          navConfig={navConfig}
          drawerWidth="250px"
          onSearch={onSearch}
        />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
