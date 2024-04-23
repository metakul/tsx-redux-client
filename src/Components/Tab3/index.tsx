
import { Box } from '@mui/material';
import { ConnectWallet } from '@thirdweb-dev/react';
import Dexui from "../Dexui"
const Tab3 = () => {

  return (
    <Box className="">
   <ConnectWallet/>

   <Dexui/>
    </Box>
  );
};

export default Tab3;