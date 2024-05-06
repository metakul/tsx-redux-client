// blogAction.tsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoadedBlogs, addBlog, fetchCryptoInfo } from './BlogSlice';
import { ApiError, CryptoData, CryptoInfoProps } from '../../../interfaces/interface';
import { ApiEndpoint } from '../../../DataTypes/enums';
import request from '../../../Backend/axiosCall/apiCall';
import { ApiSuccess } from '../../../interfaces/interface';
import { FetchBlogData } from '../../../interfaces/interface';
import { Ipost } from '../../../interfaces/interface';

export const fetchBlogApiSlice = createAsyncThunk(
  'blogCollection/setLoadedBlogs',
  // eslint-disable-next-line no-empty-pattern
  async ({ fetchBlogData, pageSize, blogPage, setBlogPage, status }: { fetchBlogData: FetchBlogData, pageSize?: number, blogPage?: number, setBlogPage?: (page: number) => void, status: string }, { rejectWithValue, dispatch }) => {
    dispatch(setLoadedBlogs({
      loading: true,
    }));
    try {
      console.log("userType", fetchBlogData.userType, status)
      const response = await request({
        apiId: ApiEndpoint.GETBLOG.apiId,
        url: `${ApiEndpoint.GETBLOG.url}?status=${status}&pagesize=${pageSize}&page=${blogPage}`,
        method: ApiEndpoint.GETBLOG.method,
        headers: ApiEndpoint.GETBLOG.headers,
        loadingMessage: ApiEndpoint.GETBLOG.loadingMessage
      })
      const blogs: Ipost[] = response.data;
      const transformedBlogs = blogs.map(blog => ({
        ...blog,
        postId: blog._id
      }));

      dispatch(setLoadedBlogs({ blogData: transformedBlogs, loading: false }));

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Blogs Fetched SuccessFully',
        data: response.data,
      };
      if (blogPage && setBlogPage) {
        setBlogPage(blogPage + 1)
      }

      return apiSuccess;

    } catch (error) {
      dispatch(setLoadedBlogs({
        loading: false,
      }));
      const castedError = error as ApiError
      console.error('Error Fetching Blogs:', error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : 'Unknown Error');
    }
  }
);
export const fetchSingleBlogApiSlice = createAsyncThunk(
  'blogCollection/setLoadedBlogs',
  // eslint-disable-next-line no-empty-pattern
  async ({ fetchBlogData, id }: { fetchBlogData: FetchBlogData, id?: string }, { rejectWithValue, dispatch }) => {
    dispatch(setLoadedBlogs({
      loading: true,
    }));
    try {
      console.log("userType", fetchBlogData.userType)
      const response = await request({
        apiId: ApiEndpoint.GETSINGLEBLOG.apiId,
        url: `${ApiEndpoint.GETSINGLEBLOG.url}/${id}`,
        method: ApiEndpoint.GETSINGLEBLOG.method,
        headers: ApiEndpoint.GETSINGLEBLOG.headers,
        loadingMessage: ApiEndpoint.GETSINGLEBLOG.loadingMessage
      })
      const blogs: Ipost = response.data;

      const { _id: postId, ...rest } = blogs;
      const updatedBlogs = { postId, ...rest };

      dispatch(setLoadedBlogs({ blogData: [updatedBlogs], loading: false }));

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Blogs Fetched SuccessFully',
        data: response.data,
      };

      return apiSuccess;

    } catch (error) {
      const castedError = error as ApiError
      console.error('Error Fetching Blogs:', error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : 'Unknown Error');
    }
  }
);

export const addBlogApiSlice = createAsyncThunk(
  'blogCollection/addBlog',
  async ({ newBlogData, setDialogOpen, postType }: { newBlogData: Ipost, setDialogOpen: (open: boolean) => void, postType?: string }, { rejectWithValue, dispatch }) => {
    try {

      let response
      if (postType == "edit") {
        response = await request({
          apiId: ApiEndpoint.EDIT_BLOG.apiId,
          url: `${ApiEndpoint.EDIT_BLOG.url}/${newBlogData.postId}`,
          method: ApiEndpoint.EDIT_BLOG.method,
          headers: ApiEndpoint.EDIT_BLOG.headers,
          data: newBlogData,
          loadingMessage: ApiEndpoint.EDIT_BLOG.loadingMessage
        });
      }
      else {
        response = await request({
          apiId: ApiEndpoint.ADD_BLOG.apiId,
          url: ApiEndpoint.ADD_BLOG.url,
          method: ApiEndpoint.ADD_BLOG.method,
          headers: ApiEndpoint.ADD_BLOG.headers,
          data: newBlogData,
          loadingMessage: ApiEndpoint.ADD_BLOG.loadingMessage
        });
      }
      const newBlog: Ipost = response.data.newPost

      const { _id: postId, ...rest } = newBlog;
      const updatedBlogs = { postId, ...rest };
      dispatch(addBlog(updatedBlogs)); // Dispatch addBlog action with new blog data

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


export const updateBlogSlice = createAsyncThunk(
  'blogCollection/addBlog',
  async ({ postId, status, userType }: { status: string, postId?: string, userType: string }, { rejectWithValue, dispatch }) => {
    try {

      const response = await request({
        apiId: ApiEndpoint.UPDATE_BLOG.apiId,
        url: `${ApiEndpoint.UPDATE_BLOG.url}/${postId}`,
        method: ApiEndpoint.UPDATE_BLOG.method,
        headers: ApiEndpoint.UPDATE_BLOG.headers,
        data: status,
        loadingMessage: ApiEndpoint.UPDATE_BLOG.loadingMessage
      });
      const loadForUser: FetchBlogData = {
        userType
      }

      dispatch(fetchSingleBlogApiSlice({ fetchBlogData: loadForUser, id: postId })); // Dispatch addBlog action with new blog data

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Blog Added Successfully',
        data: response.data,
      };
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
  async ({ cryptoSymbol, _id, currency }: CryptoInfoProps, { rejectWithValue, dispatch }) => {
    try {
      const response = await request({
        apiId: ApiEndpoint.FetchCryptoInfo.apiId,
        url: `${ApiEndpoint.FetchCryptoInfo.url}/${cryptoSymbol}/${currency}`,
        method: ApiEndpoint.FetchCryptoInfo.method,
        data: { cryptoSymbol },
        headers: ApiEndpoint.FetchCryptoInfo.headers,
        loadingMessage: ApiEndpoint.FetchCryptoInfo.loadingMessage
      })

      //todo add propoer data for cryptoInfo
      const cryptoData: CryptoData = {
        cryptoSymbol: response.data.asset_id_base,
        currency: response.data.asset_id_quote,
        price: response.data.rate,
        marketCap: response.data.time
      };
      dispatch(fetchCryptoInfo({ _id: _id, cryptoData: cryptoData }));

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Crypto Info Fetched SuccessFully',
        data: response.data,
      };

      console.log(apiSuccess);
      return apiSuccess;

    } catch (error) {
      const castedError = error as ApiError
      console.error('Failed To Load:', error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : 'Unknown Error');
    }
  }
);

