// authActions.tsx
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { setCryptoInfo } from './CryptoInfoSlice';
import { ApiError, CryptoInfoProps } from '../../../../interfaces/interface';
import { ApiEndpoint } from '../../../../DataTypes/enums';
import request from '../../../../Backend/axiosCall/apiCall';
import { ApiSuccess } from '../../../../interfaces/interface';

// interface JwtPayload {
//   sub: string;
//   walletAddress: string;
//   user_type: string; 
// }

export const fetchCryptoDispatcher = createAsyncThunk(
  'FetchCryptoInfo',
  async ({ cryptoSymbol }: CryptoInfoProps, { rejectWithValue,
    //  dispatch
     }) => {
    try {
      const response = await request({
        url: ApiEndpoint.FetchCryptoInfo.url,
        method: ApiEndpoint.FetchCryptoInfo.method,
        data: { cryptoSymbol },
        headers: ApiEndpoint.FetchCryptoInfo.headers
      })
      console.log(response)
      // Assuming the response contains user information and a token
      // const {  access } = response.data.token;

      // const user:JwtPayload=jwtDecode(access)

      // dispatch(setCredentials({ user:user.walletAddress, token:access, userType:user.user_type }));

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Crypto Info Fetched SuccessFully',
        data: response.data,
      };
  
      console.log(apiSuccess);
      return apiSuccess;

    } catch (error) {
      const castedError =error as ApiError
      console.error('Failed To Load:', error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : 'Unknown Error');
    }
  }
);
