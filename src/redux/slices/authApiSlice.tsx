// authActions.tsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCredentials } from './authSlice';
import { ApiError, LoginData, VerifyLoginData, ResendOtpData } from '../../interfaces/interface';
import { ApiEndpoint } from '../../DataTypes/enums';
import request from '../../Backend/axiosCall/apiCall';
import { ApiSuccess } from '../../interfaces/interface';
import { ErrorType } from '../../DataTypes/errors';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ id, password, userType }: LoginData, { rejectWithValue }) => {
    try {
      const response = await request({
        url: `${ApiEndpoint.LOGIN.url}`,
        method: ApiEndpoint.LOGIN.method,
        // TODO: change adminId to {userId} for custom userType Login
        data: { id, password, userType },
        headers: ApiEndpoint.LOGIN.headers
      })
      if (response.data.status === 200) {
        
        const apiSuccess: ApiSuccess = {
          statusCode: response.status,
          message: 'OTP Sent Successfully',
          data: response.data,
        };

        return apiSuccess;
      }
      else {
        return rejectWithValue(ErrorType.LOGINERROR);
      }
    } catch (error) {
      const castedError = error as ApiError
      console.error(ErrorType.UNKNOWN_ERROR, error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : ErrorType.UNKNOWN_ERROR);
    }
  }
);

// * @param otp
export const loginVerifyUser = createAsyncThunk(
  'auth/login/verifyOtp',
  async ({ id, otp, userType }: VerifyLoginData, { rejectWithValue, dispatch }) => {
    try {
      const response = await request({
        url: `${ApiEndpoint.LOGINVERIFY.url}?id=${id}`,
        method: ApiEndpoint.LOGINVERIFY.method,
        data: { otp },
        headers: ApiEndpoint.LOGINVERIFY.headers
      })
      //  TODO: check status in either response.status or response.data.status
      if (response.status === 200) {

        // * Assuming the response contains user information and a token
        const { accessToken:token,refreshToken:user } = response.data;

        // TODO: save access and refresh in cookies and apply the refresh logic

        // * Dispatch the setCredentials action to update the authentication state
        dispatch(setCredentials({ user, token, userType }));

        const apiSuccess: ApiSuccess = {
          statusCode: response.status,
          message: 'Login Request successful',
          data: response.data,
        };

        return apiSuccess;
      }
      else {
        return rejectWithValue(ErrorType.VERIFYLOGINERROR);
      }
    } catch (error) {
      const castedError = error as ApiError
      console.error(ErrorType.UNKNOWN_ERROR, error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : ErrorType.UNKNOWN_ERROR);
    }
  }
);

// * @param otp
export const resendOtpLogin = createAsyncThunk(
  'auth/login/resentOtp',
  async ({ id,userType }: ResendOtpData, { rejectWithValue }) => {
    try {
      const response = await request({
        url: `${ApiEndpoint.RESENDLOGINOTP.url}?userType=${userType}?id=${id}`,
        method: ApiEndpoint.RESENDLOGINOTP.method,
        headers: ApiEndpoint.RESENDLOGINOTP.headers
      })
      if (response.status === 200) {
        const apiSuccess: ApiSuccess = {
          statusCode: response.status,
          message: 'Login Request successful',
          data: response.data,
        };
        return apiSuccess;
      }
      else {
        return rejectWithValue(ErrorType.RESEND_OTP_ERROR);
      }
    } catch (error) {
      const castedError = error as ApiError
      console.error(ErrorType.RESEND_OTP_ERROR, error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : ErrorType.UNKNOWN_ERROR);
    }
  }
);