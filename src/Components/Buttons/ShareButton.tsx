import { Box } from "@mui/material";
import "./style.css";
// import { motion } from "framer-motion";
import { ShareRounded } from "@mui/icons-material";

export default function ShareButton() {
  return (
    <Box className='flex justify-center items-center mt-8 '>
      <ShareRounded fontSize="large"/>
    </Box>
  );
}