import { Box } from "@mui/material";
import "./style.css";
// import { motion } from "framer-motion";
import { ShareRounded } from "@mui/icons-material";
import { getColors } from "../../layout/Theme/themes";
import { handleShare } from "../../scripts/handleBlogCss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ShareButton({link}:any) {
  return (
    <Box className='flex justify-center items-center '>
      <ShareRounded onClick={()=>handleShare(link)} fontSize="large" sx={{color:getColors().greenAccent[200]}}/>
    </Box>
  );
}