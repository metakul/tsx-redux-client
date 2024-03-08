import React from 'react';
import { ProtectedPageProps } from '../../interfaces/interface';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { AppDispatch } from '../../redux/store';
import { selectUserType } from './../../redux/slices/authSlice';
import Userpage from '../../Components/Three.js/index.tsx';
import AddBlogForm from '../../Components/Forms/AddBlogForm.tsx';

const ProtectedPage: React.FC<ProtectedPageProps> = (
  props
  ) => {
  const userType = useSelector(selectUserType);
  const dispatch = useDispatch();

  const handleLogout = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Dispatch the login action with the correct action type
      (dispatch as AppDispatch)(logout());
    } catch (error) {
      console.error('Error Calling logout Dispatch', error);
    }
  };

  const renderPageBasedOnUserType = () => {
    switch (userType) {
      // TODO create /root admin
      case 'SYSTEM_ADMIN':
        return <AdminPage />;
      default:
        return <Userpage />;
    }
  };

  
  return (
    <div>
      <h2>{props.pageTitle}</h2>
      <h2>{props.pageDescription}</h2>
      {renderPageBasedOnUserType()}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const AdminPage: React.FC = () => {
  const handleAddBlog = (data: unknown) => {
    console.log(data)
  };

  return <div>
        <AddBlogForm onFormSubmit={handleAddBlog} />
    <Userpage/>
  </div>;

};

export default ProtectedPage