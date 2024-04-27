
import { Container } from '@mui/material';
import { ConnectWallet } from '@thirdweb-dev/react';
import LoginForm from '../Forms/LoginForm';
import CustomDialog from '../Dailog/Dailog';
import { useState } from 'react';

const Tab4 = () => {
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <Container className="">
      <ConnectWallet />
      <CustomDialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(!isDialogOpen)}
        triggerButtonText={"Login"}
        title={"Login Now"}
        description={"This is description for Login"}
      >
        <LoginForm
          loginTitle="Login"
        />
      </CustomDialog>
    </Container>
  );
};

export default Tab4;