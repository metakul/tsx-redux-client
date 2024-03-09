import { MouseEventHandler, useContext ,useState} from "react";

// @mui
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
} from "@mui/icons-material";
// import app
import { ColorModeContext } from "../Theme/themes";
import { motion } from "framer-motion";
// const NAV_WIDTH = 280;



export default function Header(props: { onOpenNav: MouseEventHandler<HTMLButtonElement> | undefined; } ) {
  const colorMode = useContext(ColorModeContext);
  const [isOn, setIsOn] = useState(false);
  if (!colorMode) {
    // Handle the case where colorMode is undefined (e.g., context not yet initialized)
    return null; // or render a loading state or default content
  }
  const toggleSwitch = () =>{
    setIsOn(!isOn);
    colorMode.toggleColorMode()
  } 

  return (
    <AppBar >
      <Toolbar>
        <IconButton
          onClick={props.onOpenNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <div className="switch" data-ison={isOn} onClick={toggleSwitch} style={{
            border:"2px solid",
          }}>
            <motion.div className="handle" layout transition={spring} style={{
              height:"50px",
              width:"50px",
          }} />
          </div>
          
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};