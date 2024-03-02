import React from 'react';
import { HomePageProps } from '../interfaces/interface';
import MobileTabNavigation from '../Components/Tabs/mobileVIew';
import { Text } from '@radix-ui/themes';
import Blogs from '../Components/Blogs';
import { Tabs } from '../DataTypes/enums';
import LoginForm from '../Components/Forms/LoginForm';
import CustomDialog from '../Components/Dailog/Dailog';
import { CubeIcon, DownloadIcon, HomeIcon, SunIcon } from '@radix-ui/react-icons';
import MetakulCollection from '../Components/Collection/MetakulCollection';



const HomePage: React.FC<HomePageProps> = (props) => {
  const tabs = [
    { value: <HomeIcon/>, content: <Blogs />, label: Tabs.tabTitle1 },
    { value: <SunIcon/>, content: <MetakulCollection />, label:  Tabs.tabTitle2 },
    { value: <DownloadIcon/>, content: <Text size="6">$ETH: 0.7</Text>, label:  Tabs.tabTitle3 },
    { value: <CubeIcon/>, content: <Text size="6">Profile</Text>, label:  Tabs.tabTitle4 },
  ];

  const containerStyle: React.CSSProperties = {
   marginBottom:"40px"
  };
  return (
    <div style={containerStyle}>
      {props.pageTitle}
      <MobileTabNavigation tabs={tabs} />
      <CustomDialog
        triggerButtonText={"Login"}
        title={"Login Now"}
        description={"This is description for Login"}
      >
        <LoginForm
        loginTitle="sdf"
        />
      </CustomDialog>
      
    </div>
  );
};

export default HomePage;
