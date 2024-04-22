import React from 'react';
import AnimatedDialog from '../../../Dialog/AnimatedDialog';
import { UserType } from '../../../../DataTypes/enums';

interface SignUpFormProps {
  userType: UserType;
  isSignnFormOpen:boolean;
  handleSignUpForm:() => void
}

const DependentSignUpForm: React.FC<SignUpFormProps> = (props) => {
  const handleSubmit = (event: React.FormEvent) => {
    // Handle form submission logic here
    event.preventDefault();
    console.log('Form submitted! UserType:', props.userType);
  };

  return (
    <React.Fragment >
        SignUp For: {props.userType}
        <br />
        <label>
          Name:
          <input type="text" />
        </label>
        <br/>
        <label>
          Age:
          <input type="text" />
        </label>
        <br/>
        {/* Add other form fields as needed */}
        <button onClick={handleSubmit}>
            Submit
        </button>
    </React.Fragment>
  );
};

export default DependentSignUpForm;
