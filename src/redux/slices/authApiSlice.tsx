// authActions.tsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCredentials } from './authSlice';
import { ApiError, LoginData } from '../../interfaces/interface';
import { ApiEndpoint } from '../../DataTypes/enums';
import request from '../../Backend/axiosCall/apiCall';
import { ApiSuccess } from '../../interfaces/interface';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: LoginData, { rejectWithValue, dispatch }) => {
    try {
      const response = await request({
        url: ApiEndpoint.LOGIN.url,
        method: ApiEndpoint.LOGIN.method,
        data: { email, password },
        headers: ApiEndpoint.LOGIN.headers
      })
      // Assuming the response contains user information and a token
      const { user, token, userType } = response.data.user;

      // $TODO save access and refresh in cookies and apply the refresh logic
      
      // Dispatch the setCredentials action to update the authentication state
      dispatch(setCredentials({ user, token, userType }));

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Login Request successful',
        data: response.data,
      };
  
      console.log(apiSuccess);
      return apiSuccess;

    } catch (error) {
      const castedError =error as ApiError
      console.error('Login failed:', error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : 'Unknown Error');
    }
  }
);
