import {
  HomeOutlined,
  ShoppingCartOutlined,
  ReceiptLongOutlined,
  PublicOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  PieChartOutlined,
} from "@mui/icons-material";

export const navConfig = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
    to: "",
  },
  {
    text: "Into the Metaverse",
    icon: null,
    to: "",
  },
  {
    text: "Mint NFT",
    icon: <TodayOutlined />,
    to: "mint",
  },
  {
    text: "Explore",
    icon: <ShoppingCartOutlined />,
    to: "metakul",
  },
  {
    text: "Earn With Nft",
    icon: <PieChartOutlined />,
    to: "wallet",
  },
  // {
  //   text: "Metaverse",
  //   icon: null,
  //   to: "",
  // },
  {
    text: "Learn Web3",
    icon: <ReceiptLongOutlined />,
    to: "blogs",
  },

  {
    text: "Extras",
    icon:null,
    to: "",
  },
  {
    text: "Profile",
    icon: <AdminPanelSettingsOutlined />,
    to: "Profile",
  },
  {
    text: "KYC",
    icon: <PublicOutlined />,
    to: "kyc",
  },
  {
    text: "Career",
    icon: <CalendarMonthOutlined />,
    to: "Career",
  },
  
];

export default navConfig;