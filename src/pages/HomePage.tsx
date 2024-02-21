import React from 'react';
import { HomePageProps } from '../interfaces/interface';
import MobileTabNavigation from '../Components/Tabs/mobileVIew';
import { Text } from '@radix-ui/themes';
const HomePage: React.FC<HomePageProps> = (props) => {
  const tabs = [
    { value: props.pageTitle, content: <Text size="2">{props.pageDescription}</Text>, label: props.pageTitle },
    { value: "Metaverse", content: <Text size="2">Coming Soon</Text>, label: "Metaverse" },
    { value: "smartWallet", content: <Text size="2">Coming Soon</Text>, label: "Smart wallet" },
    { value: "profile", content: <Text size="2">Coming Soon</Text>, label: "Profile" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <MobileTabNavigation tabs={tabs} />
    </div>
  );
};

export default HomePage;


