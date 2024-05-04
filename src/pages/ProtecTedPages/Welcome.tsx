import React from 'react';
import { ProtectedPageProps } from '../../interfaces/interface';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { AppDispatch } from '../../redux/store';
import { selectUserType } from './../../redux/slices/authSlice';
// import Userpage from '../../Components/LoginPagesComp/Three.js/index.tsx';
import MobileTabNavigation from '../../Components/MobileTabNav/mobileVIew.tsx';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import { LogoutRounded } from '@mui/icons-material';
import AddBlogComp from '../../Components/LoginPagesComp/Blogs/AddBlog.tsx';
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
    console.log(userType)
    switch (userType) {
      // TODO create /root admin
      case 'SYSTEM_ADMIN':
        return <AddBlogComp />;
      default:
        return <AddBlogComp />;
    }
  };

  const tabs = [
    { value: <OtherHousesOutlinedIcon />, content: renderPageBasedOnUserType(), label: "Add Blog" },
    {
      value: <LogoutRounded />, content: <div >
        <h2>{props.pageTitle}</h2>
        <h2>{props.pageDescription}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>, label: "Add Blog"
    },

  ];

  return (
    <div >
      <MobileTabNavigation tabs={tabs} />
    </div>
  );
};





export default ProtectedPage