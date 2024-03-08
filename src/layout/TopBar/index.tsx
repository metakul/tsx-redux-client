import { MouseEventHandler, useContext ,useState} from "react";

// @mui
import { styled } from "@mui/material/styles";
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
const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;
const StyledRoot = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
  borderBottom: "1px solid ",
  borderBottomLeftRadius:"25px",
  borderBottomRightRadius:"25px",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

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
    <StyledRoot >
      <StyledToolbar>
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
      </StyledToolbar>
    </StyledRoot>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};