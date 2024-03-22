// authActions.tsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoadedBlogs,addBlog } from './BlogSlice';
import { ApiError } from '../../../interfaces/interface';
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
      console.log("user",userType)
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

      dispatch(addBlog(newBlogData)); // Dispatch addBlog action with new blog data

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