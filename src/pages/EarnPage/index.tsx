
import Box from '@mui/material/Box';
import Staking from './Staking';
import UnStaking from './UnStaking';
import MobileTabNavigation from '../../Components/MobileTabNav/mobileVIew';
import { Typography } from '@mui/material';
const tabs = [
  { value: <Typography variant='h5' className='font-display text-base hover:text-accent'>Stake</Typography>, content: <Staking/>, label: "Add Blog" },
  { value: <Typography variant='h5' className='font-display text-base hover:text-accent'>UnStake</Typography>, content: <UnStaking/>, label: "Add Blog" },

];

export default function EarnPage() {


  return (
    <Box sx={{ width: '100%',ml:4 }}>
   <MobileTabNavigation tabs={tabs} />

    </Box>
  );
}