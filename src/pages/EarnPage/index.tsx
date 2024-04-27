
import Box from '@mui/material/Box';
import Staking from './Staking';
import UnStaking from './UnStaking';
import MobileTabNavigation from '../../Components/MobileTabNav/mobileVIew';
import { Typography } from '@mui/material';
const tabs = [
  { value: <Typography variant='h5' className='font-display text-base hover:text-accent'>Stake</Typography>, content: <Staking/>, label: "Stake Now" },
  { value: <Typography variant='h5' className='font-display text-base hover:text-accent'>UnStake</Typography>, content: <UnStaking/>, label: "UnStake Now" },

];

export default function EarnPage() {


  return (
    <Box sx={{ width: '100%',}}>
   <MobileTabNavigation tabs={tabs} position={"top"}/>

    </Box>
  );
}