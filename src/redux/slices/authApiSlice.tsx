// authActions.tsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCredentials } from './authSlice';
import { ApiError, LoginData, VerifyLoginData } from '../../interfaces/interface';
import { ApiEndpoint } from '../../DataTypes/enums';
import request from '../../Backend/axiosCall/apiCall';
import { ApiSuccess } from '../../interfaces/interface';
import { ErrorType } from '../../DataTypes/errors';
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password, userType }: LoginData, { rejectWithValue, dispatch }) => {
    try {
      const response = await request({
        url: `${userType}/${ApiEndpoint.LOGIN.url}`,
        method: ApiEndpoint.LOGIN.method,
        // $TODO change adminId to {userId} for custom Login
        data: { adminId:email, password },
        headers: ApiEndpoint.LOGIN.headers
      })
      if (response.data.status === 200) {


        const apiSuccess: ApiSuccess = {
          statusCode: response.status,
          message: 'OTP Sent Successfully',
          data: response.data,
        };

        console.log(apiSuccess);
        return apiSuccess;
      }
      else {
        return rejectWithValue(ErrorType.LOGINERROR);
      }
    } catch (error) {
      const castedError = error as ApiError
      console.error(ErrorType.UnknownError, error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : ErrorType.UnknownError);
    }
  }
);
export const loginVerifyUser = createAsyncThunk(
  'auth/login/verifyOtp',
  async ({ adminId, otp, userType }: VerifyLoginData, { rejectWithValue, dispatch }) => {
    try {
      const response = await request({
        url: `${userType}/${ApiEndpoint.LOGINVERIFY.url}`,
        method: ApiEndpoint.LOGINVERIFY.method,
        data: { adminId:adminId, otp },
        headers: ApiEndpoint.LOGINVERIFY.headers
      })
      //  $TODO check status in either response.status or response.data.status
      if (response.status === 200) {

        // Assuming the response contains user information and a token
        const { accessToken:token,refreshToken:user } = response.data;

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
      }
      else {
        return rejectWithValue(ErrorType.VERIFYLOGINERROR);
      }
    } catch (error) {
      const castedError = error as ApiError
      console.error(ErrorType.UnknownError, error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : ErrorType.UnknownError);
    }
  }
);
