import React from 'react';
import LoginForm from '../Components/Forms/LoginForm';
import CustomDialog from '../Components/Dialog/Dialog';
import { HomePageProps } from '../interfaces/CompInterfaces';
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
        <React.Fragment key={index} >

          <CustomDialog
            triggerButtonText={"Login"}
            title={"Custom Form"}
            description={"LOGIN/SIGNUP for"}
            userType={data.endpoint}
            className={`testPptr${index}`}
          >
            <LoginForm loginTitle='Login' userType={data.endpoint} />
          </CustomDialog>
        </React.Fragment>
      ))}

    </Container>
  );
};

export default HomePage;
