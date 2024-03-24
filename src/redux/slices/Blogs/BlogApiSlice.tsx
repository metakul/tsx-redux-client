// authActions.tsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoadedBlogs,addBlog, fetchCryptoInfo } from './BlogSlice';
import { ApiError, CryptoData, CryptoInfoProps } from '../../../interfaces/interface';
import { ApiEndpoint } from '../../../DataTypes/enums';
import request from '../../../Backend/axiosCall/apiCall';
import { ApiSuccess } from '../../../interfaces/interface';
import { FetchBlogData } from '../../../interfaces/interface';
import { Ipost } from '../../../interfaces/interface';

export const fetchBlogApiSlice = createAsyncThunk(
  'blogCollection/setLoadedBlogs',
  // eslint-disable-next-line no-empty-pattern
  async ({ userType}:FetchBlogData , { rejectWithValue, dispatch }) => {
    try {
      console.log("userType",userType)
      const response = await request({
        url: ApiEndpoint.GETBLOG.url,
        method: ApiEndpoint.GETBLOG.method,
        headers: ApiEndpoint.GETBLOG.headers
      })
      console.log(response)
      const blogs:Ipost[] = response.data;

      dispatch(setLoadedBlogs({blogData:blogs} ));

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Blogs Fetched SuccessFully',
        data: response.data,
      };
  
      return apiSuccess;

    } catch (error) {
      const castedError =error as ApiError
      console.error('Error Fetching Blogs:', error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : 'Unknown Error');
    }
  }
);

export const addBlogApiSlice = createAsyncThunk(
  'blogCollection/addBlog',
  async ({newBlogData,setDialogOpen}:  { newBlogData: Ipost, setDialogOpen: (open: boolean) => void }, { rejectWithValue, dispatch }) => {
    try {
      const response = await request({
        url: ApiEndpoint.ADD_BLOG.url,
        method: ApiEndpoint.ADD_BLOG.method,
        headers: ApiEndpoint.ADD_BLOG.headers,
        data: newBlogData,
      });

      dispatch(addBlog(response.data.newPost)); // Dispatch addBlog action with new blog data

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Blog Added Successfully',
        data: response.data,
      };

      setDialogOpen(false)
  
      return apiSuccess;

    } catch (error) {
      const castedError = error as ApiError;
      console.error('Error Adding Blog:', error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : 'Unknown Error');
    }
  }
);

//fetch Blogs CryptoData

export const fetchCryptoDispatcher = createAsyncThunk(
  'FetchCryptoInfo',
  async ({ cryptoSymbol,_id,currency }: CryptoInfoProps, { rejectWithValue,dispatch }) => {
    try {
      const response = await request({
        url: `${ApiEndpoint.FetchCryptoInfo.url}/${cryptoSymbol}/${currency}`,
        method: ApiEndpoint.FetchCryptoInfo.method,
        data: { cryptoSymbol },
        headers: ApiEndpoint.FetchCryptoInfo.headers
      })

      //todo add propoer data for cryptoInfo
      const cryptoData: CryptoData = {
        cryptoSymbol: response.data.asset_id_base,
        currency: response.data.asset_id_quote,
        price: response.data.rate,
        marketCap: response.data.time
      };
      dispatch(fetchCryptoInfo({_id:_id,cryptoData:cryptoData }));

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