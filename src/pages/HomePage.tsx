import React, { useState } from 'react';
import { HomePageProps } from '../interfaces/interface';
import MobileTabNavigation from '../Components/Tabs/mobileVIew';
import Blogs from '../Components/Blogs';
import { Tabs } from '../DataTypes/enums';
import LoginForm from '../Components/Forms/LoginForm';
import CustomDialog from '../Components/Dailog/Dailog';
import MetakulCollection from '../Components/Collection/MetakulCollection';
import Tab3 from '../Components/Tab3';

// icons
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';

const HomePage: React.FC<HomePageProps> = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const tabs = [
    { value: <OtherHousesOutlinedIcon />, content: <Blogs />, label: Tabs.tabTitle1 },
    { value: <StoreOutlinedIcon />, content: <MetakulCollection />, label: Tabs.tabTitle2 },
    { value: <CategoryOutlinedIcon />, content: <Tab3 />, label: Tabs.tabTitle3 },
    {
      value: <ContactEmergencyOutlinedIcon />, content: <CustomDialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(!isDialogOpen)}
        triggerButtonText={"Login"}
        title={"Login Now"}
        description={"This is description for Login"}
      >
        <LoginForm
          loginTitle="Login"
        />
      </CustomDialog>, label: Tabs.tabTitle4
    },
  ];

  const containerStyle: React.CSSProperties = {
    marginBottom: "40px"
  };

  return (
    <div style={containerStyle}>

      <MobileTabNavigation tabs={tabs} />


    </div>
  );
};

export default HomePage;
