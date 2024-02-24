import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import ProtectedPage from "./pages/ProtecTedPages/Welcome";
import { Pages } from "./DataTypes/enums";
import { selectToken } from "./redux/slices/authSlice";
import DashboardOutlet from "./layout/DashboardLayout";

const Router: React.FC = () => {
  const token = useSelector(selectToken);

  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardOutlet />,
      children: [
        {
          path: Pages.HOME,
          element: token ? <Navigate to={`${Pages.DASHBOARD}`} /> : <HomePage pageTitle="HomePage" pageDescription="This is Home Page" />,
        },
        {
          path: Pages.DASHBOARD,
          element: token ? <ProtectedPage pageTitle="Logged In" pageDescription="This is Protected page" /> : <Navigate to={Pages.HOME} />,
        },
      ],
    },
    { path: "*", element: <Navigate to={Pages.HOME} /> },
  ]);

  return routes;
};

export default Router;
