import React from 'react';
import { HomePageProps } from '../interfaces/interface';
import MobileTabNavigation from '../Components/Tabs/mobileVIew';
import { Text } from '@radix-ui/themes';
import Blogs from '../Components/Blogs';
import BtcHalving from '../Components/Nicehash/btcHalfing';
import { Tabs } from '../DataTypes/enums';
import LoginForm from '../Components/Forms/LoginForm';
import CustomDialog from '../Components/Dailog/Dailog';

const HomePage: React.FC<HomePageProps> = (props) => {
  const tabs = [
    { value: Tabs.tabTitle1, content: <Blogs />, label: Tabs.tabTitle1 },
    { value: Tabs.tabTitle2, content: <BtcHalving />, label:  Tabs.tabTitle2 },
    { value: Tabs.tabTitle3, content: <Text size="6">$ETH: 0.7</Text>, label:  Tabs.tabTitle3 },
    { value: Tabs.tabTitle4, content: <Text size="6">Profile</Text>, label:  Tabs.tabTitle4 },
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
