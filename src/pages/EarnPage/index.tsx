
import Box from '@mui/material/Box';
import Staking from './Staking';
import UnStaking from './UnStaking';
import MobileTabNavigation from '../../Components/MobileTabNav/mobileVIew';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
const tabs = [
  { value: <MotionPhotosAutoIcon />, content: <Staking/>, label: "Add Blog" },
  { value: <MotionPhotosAutoIcon />, content: <UnStaking/>, label: "Add Blog" },

];

export default function EarnPage() {


  return (
    <Box sx={{ width: '100%' }}>
   <MobileTabNavigation tabs={tabs} />

    </Box>
  );
}