
import { HomeIcon, ImageIcon, PaperPlaneIcon, PieChartIcon, StopIcon } from "@radix-ui/react-icons";

export const navConfig = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      to: "",
    },
    {
      text: "Into the Metaverse",
      icon: null,
      to: "",
    },
    {
      text: "My Wallet",
      icon: < StopIcon/>,
      to: "wallet",
    },
    {
      text: "Claim NFT",
      icon: <ImageIcon />,
      to: "NFT",
    },
    {
      text: "Earn With Nft",
      icon: <PieChartIcon />,
      to: "Staking",
    },
    {
      text: "Extras",
      icon:null,
      to: "",
    },
    {
      text: "Profile",
      icon: <PaperPlaneIcon />,
      to: "Profile",
    },

    
  ];

  export default navConfig;