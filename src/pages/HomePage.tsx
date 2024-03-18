import React from 'react';
import LoginForm from '../Components/Forms/LoginForm';
import CustomDialog from '../Components/Dialog/Dialog';
import { HomePageProps } from '../interfaces/interface';
import { Container } from '@radix-ui/themes';
import CustomHeading from '../Components/Typogrpahy/Text/Heading';
import CustomLink from '../Components/Typogrpahy/Links/Link';
import { UserType } from '../DataTypes/enums';

const HomePage: React.FC<HomePageProps> = (props) => {

  const generateLoginButton = () => {
    const userTypeKeys = Object.keys(UserType) as Array<keyof typeof UserType>;
    return userTypeKeys.map(key => ({
      endpoint: UserType[key],
      text: `${UserType[key]} Login`,
    }));
  };

  const buttonDataTop = generateLoginButton();

  return (
    <Container className='testPptr'>
      <CustomLink
        href="/"
      >
        <CustomHeading placeholder={props.pageTitle} />
      </CustomLink>

      {buttonDataTop.map((data, index) => (
        <CustomDialog
          key={index}
          triggerButtonText={"Login"}
          title={"Login Now"}
          description={"Login for"}
          userType={data.endpoint}
          className={`testPptr${index}`} 
        >
          <LoginForm loginTitle='Login' userType={data.endpoint} />
        </CustomDialog>
      ))}

    </Container>
  );
};

export default HomePage;
