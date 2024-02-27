import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slices/authApiSlice';
import { LoginData } from '../../interfaces/interface';
import { AppDispatch } from '../../redux/store';
import CustomHeading from '../Typogrpahy/Text/Heading';
import CustomTextField from '../Typogrpahy/Text/TextFeild';
import { LoginFormProps } from '../../interfaces/interface';


const LoginForm: React.FC<LoginFormProps> = (props) => {
  const dispatch = useDispatch();

  const [user, setuser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const loginData: LoginData = {
        email: user,
        password: password,
        userType: props.userType,
      };
      console.log(loginData);
      (dispatch as AppDispatch)(loginUser(loginData));

    } catch (error) {
      console.error('Login failed In LoginPage:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
