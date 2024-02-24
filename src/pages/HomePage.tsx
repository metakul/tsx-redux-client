import React from 'react';
import { HomePageProps } from '../interfaces/interface';
import MobileTabNavigation from '../Components/Tabs/mobileVIew';
import { Text } from '@radix-ui/themes';
import BlogPage from '../Components/BlogPage';
import BtcHalving from '../Components/Nicehash/btcHalfing';

const HomePage: React.FC<HomePageProps> = (props) => {
  const tabs = [
    { value: props.pageTitle, content: <BlogPage />, label: props.pageTitle },
    { value: "Bitcoin", content: <BtcHalving />, label: "Bitcoin" },
    { value: "smartWallet", content: <Text size="2">$ETH: 0.7</Text>, label: "wallet" },
    { value: "profile", content: <Text size="2">Profile</Text>, label: "Profile" },
  ];
  return (
    <div >
      <MobileTabNavigation tabs={tabs} />
  
    </div>
  );
};

export default HomePage;


