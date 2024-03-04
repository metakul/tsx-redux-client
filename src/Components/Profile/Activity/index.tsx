import React from 'react';
import { UserActivityProps } from '../../../interfaces/CompInterfaces';

const UserActivity: React.FC<UserActivityProps> = (props) => {
  console.log(props);
  
  return (
    <div>
        Activity
    </div>
  ); 
};

export default UserActivity;
