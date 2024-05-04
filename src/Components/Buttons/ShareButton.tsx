import { Box } from "@mui/material";
import "./style.css";
// import { motion } from "framer-motion";
import { ShareRounded } from "@mui/icons-material";
import { getColors } from "../../layout/Theme/themes";

export default function ShareButton() {
  return (
    <Box className='flex justify-center items-center '>
      <ShareRounded fontSize="large" sx={{color:getColors().greenAccent[200]}}/>
    </Box>
  );
}