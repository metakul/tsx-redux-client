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

  return (
    <AnimatedDialog onSubmit={handleSubmit} isOpen={true}>
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
  );
};

export default DependentSignUpForm;
