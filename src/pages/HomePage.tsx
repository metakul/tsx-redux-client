import React from 'react';
import { HomePageProps } from '../interfaces/interface';
import ThreeDPage from '../Components/Three.js/index.js';
const HomePage: React.FC<HomePageProps> = (props) => {

  return (
    <div>
      <h1>Welcome to the {props.pageTitle}</h1>
      <h2>{props.pageDescription}</h2>
      <ThreeDPage></ThreeDPage>
    </div>
  );
};

export default HomePage;


