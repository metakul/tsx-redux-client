// blogAction.tsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSingleCryptoInfo } from './CryptoSlice';
import { ApiError, CryptoData, CryptoInfoProps } from '../../../interfaces/interface';
import { ApiEndpoint } from '../../../DataTypes/enums';
import request from '../../../Backend/axiosCall/apiCall';
import { ApiSuccess } from '../../../interfaces/interface';

export const fetchSingleCryptoDispatcher = createAsyncThunk(
  'FetchCryptoInfo',
  async ({ cryptoSymbol,currency }: CryptoInfoProps, { rejectWithValue,dispatch }) => {
    dispatch(fetchSingleCryptoInfo({_id:cryptoSymbol || "", loading: true, cryptoData: {
      cryptoSymbol:cryptoSymbol,
      currency:currency,
      price:"loading",
      marketCap:"loading",
    } })); // Dispatch loading as true
 
    try {
      const response = await request({
        url: `${ApiEndpoint.FetchCryptoInfo.url}/${cryptoSymbol}/${currency}`,
        method: ApiEndpoint.FetchCryptoInfo.method,
        data: { cryptoSymbol },
        headers: ApiEndpoint.FetchCryptoInfo.headers,
      })
      
      //todo add propoer data for cryptoInfo
      const cryptoData: CryptoData = {
        cryptoSymbol: response.data.asset_id_base,
        currency: response.data.asset_id_quote,
        price: response.data.rate,
        marketCap: response.data.time
      };
      dispatch(fetchSingleCryptoInfo({_id:cryptoSymbol || "",cryptoData,loading:false}));

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
