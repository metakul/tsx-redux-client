// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../interfaces/interface';

const storedUser = localStorage.getItem('user');
const storedToken = localStorage.getItem('token');
const storedUserType = localStorage.getItem('userType');

const initialState: AuthState = {
  isAuthenticated: false,
  user: storedUser ? storedUser : null,
  token: storedToken ? storedToken : null,
  userType: storedUserType ? storedUserType : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: string; token: string; userType: string }>) => {
      // Update the user authentication logic
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userType = action.payload.userType;

      localStorage.setItem('user', action.payload.user);
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userType', action.payload.userType);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.userType = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('userType');
    },
    // $TODO Add syncAuthState with autContext
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

// Selectors remain the same
export const selectUser = (state: { auth: { user: string } }) => state.auth.user;
export const selectToken = (state: { auth: { token: string } }) => state.auth.token;
export const isAuthenticated = (state: { auth: { isAuthenticated: boolean } }) => state.auth.isAuthenticated;
export const userType = (state: { auth: { userType: string } }) => state.auth.userType;
