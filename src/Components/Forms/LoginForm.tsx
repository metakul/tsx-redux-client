import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, loginVerifyUser, resendOtpLogin } from '../../redux/slices/authApiSlice';
import { LoginData } from '../../interfaces/interface';
import { AppDispatch } from '../../redux/store';
import CustomHeading from '../Typogrpahy/Text/Heading';
import CustomTextField from '../Typogrpahy/Text/TextFeild';
import { LoginFormProps } from '../../interfaces/interface';
import { LoginButtonText } from '../../DataTypes/constText';
import DependentSignUpForm from './SignUp/Applicants/Dependent';
import { UserType } from '../../DataTypes/enums';

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const dispatch = useDispatch();

  const [user, setuser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [showOtpField, setShowOtpField] = useState<boolean>(false);
  const [showSignUpForm,setShowSignUpForm]=useState<boolean>(false)

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const loginData: LoginData = {
        id: user,
        password: password,
        userType: props.userType,
      };

      (dispatch as AppDispatch)(loginUser(loginData));
      setShowOtpField(true);
    } catch (error) {
      console.error('Login failed In LoginPage:', error);
    }
  };

  const handleVerifyOtpSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const verifyLoginData = {
        id: user,
        otp: otp,
        userType: props.userType,
      };

      // Dispatch loginVerifyUser action
      (dispatch as AppDispatch)(loginVerifyUser(verifyLoginData));
    } catch (error) {
      console.error('OTP verification failed:', error);
    }
  };

  const handleResendOtp = async () => {
    (dispatch as AppDispatch)(resendOtpLogin({ id: user, userType: props.userType }));
  };

  const handleSignUpForm = async () => {
    setShowSignUpForm(!showSignUpForm)
  }

  const renderSignUpFormBasedOnUserType = () => {
    switch (props.userType as UserType) {
      case props.userType:
        return <DependentSignUpForm userType={props.userType} />
      default:
        return <DependentSignUpForm userType={UserType.RANDOM}/>
    }
  }

  return (
    <div>
      <form onSubmit={showOtpField ? handleVerifyOtpSubmit : handleLoginSubmit}>
        {/* Use CustomHeading */}
        <CustomHeading placeholder="Login Form" style={{ fontSize: '24px' }}>
          {props.loginTitle}
        </CustomHeading>

        {/* Use CustomTextField */}
        <CustomTextField
          label="Username"
          placeholder="Enter your username"
          value={user}
          onChange={(value) => setuser(value)}
        />

        {/* Use CustomTextField for password */}
        <CustomTextField
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(value) => setPassword(value)}
        />
        {showOtpField && (
          <CustomTextField
            label="OTP"
            placeholder="Enter OTP"
            type="text"
            value={otp}
            onChange={(value) => setOtp(value)}
          />
        )}
        <div>
          <button type="submit">
            {showOtpField ? LoginButtonText.VERIFY_OTP : LoginButtonText.SEND_OTP}
          </button>

          {showOtpField && (
            <button type="button" onClick={handleResendOtp}>
              {LoginButtonText.RESEND_OTP}
            </button>
          )}
        </div>
      </form>

      <button type="button" onClick={handleSignUpForm}>
        SIGNUP
      </button>
      {showSignUpForm &&
      <div>
        {renderSignUpFormBasedOnUserType()}
      </div>
      }
    </div>
  );
};

export default LoginForm;
