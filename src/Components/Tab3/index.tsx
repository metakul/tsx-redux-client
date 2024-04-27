
import { Container } from '@mui/material';
import { ConnectWallet } from '@thirdweb-dev/react';
import Dexui from "../Dexui"
const Tab3 = () => {

  return (
    <Container className="">
      <ConnectWallet />
      <Dexui />
    </Container>
  );
};

export default Tab3;