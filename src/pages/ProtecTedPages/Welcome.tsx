import React from 'react'
import { ProtectedPageProps } from '../../interfaces/interface'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import { AppDispatch } from '../../redux/store'
import { selectUser } from './../../redux/slices/authSlice';

const ProtectedPage: React.FC<ProtectedPageProps> = (props) => {    
 const selectedUser=useSelector(selectUser)
 const dispatch = useDispatch(); 

 const handleLogout = async (event: React.FormEvent) => {
  event.preventDefault();
  try {
    // Dispatch the login action with correct action type
    (dispatch as AppDispatch)(logout());
  } catch (error) {
    console.error('Error Calling Dispatch', error);
  }
};

  return (
    <div >
        <h2>{props.pageTitle}</h2>
        <h2>{props.pageDescription}</h2>
        <>Hi </> {selectedUser}
        <button onClick={handleLogout}>
          Logout
      </button>
    </div>
  )
}

export default ProtectedPage