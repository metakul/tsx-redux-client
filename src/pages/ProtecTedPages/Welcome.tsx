import React from 'react'
import { ProtectedPageProps } from '../../interfaces/interface'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import { AppDispatch } from '../../redux/store'
import { selectUser } from '../../redux/slices/authSlice';
import { Button, Container } from '@radix-ui/themes'

const ProtectedPage: React.FC<ProtectedPageProps> = (props) => {    
 const selectedUser=useSelector(selectUser)
 const dispatch = useDispatch();
 console.log(selectedUser)

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
    <Container >
        {props.pageTitle} {props.pageDescription}
        Hi this is dashboard
        <Button onClick={handleLogout}>
          Logout
      </Button>
    </Container>
  )
}

export default ProtectedPage