import React from 'react';
import AnimatedDialog from '../../../Drawer';
import { UserType } from '../../../../DataTypes/enums';

interface SignUpFormProps {
  userType: UserType;
}

const DependentSignUpForm: React.FC<SignUpFormProps> = (props) => {
  const handleSubmit = (event: React.FormEvent) => {
    // Handle form submission logic here
    event.preventDefault();
    console.log('Form submitted! UserType:', props.userType);
  };
  const dialogStyle: React.CSSProperties = {
    width: '100%', 
    height: '100%', 
    margin: 0, 
    padding: 20, 
    boxSizing: 'border-box', 
  };
  return (
    <div style={dialogStyle}>
    <AnimatedDialog onSubmit={handleSubmit} isOpen={true} >
      SignUp For: {props.userType}
      <br/>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Age:
        <input type="text" />
      </label>
      {/* Add other form fields as needed */}
    </AnimatedDialog>
    </div>
  );
};

export default DependentSignUpForm;
