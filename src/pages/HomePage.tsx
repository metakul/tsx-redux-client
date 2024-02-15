import React from 'react';
import LoginForm from '../Components/Forms/LoginForm';
import CustomDialog from '../Components/Dailog/Dailog';
import { HomePageProps } from '../interfaces/interface';

const HomePage: React.FC<HomePageProps> = (props) => {

  return (
    <div>
      <h1>Welcome to the {props.pageTitle}</h1>
      <h2>{props.pageDescription}</h2>
      <CustomDialog
        triggerButtonText={"Login"}
        title={"Login Now"}
        description={"This is description for Login"}
      >
        <LoginForm loginTitle='Login' />
      </CustomDialog>
    </div>
  );
};

export default HomePage;


