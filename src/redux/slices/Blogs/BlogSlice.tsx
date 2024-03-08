import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { blogData } from './initialData';
import { BlogsState, Ipost } from '../../../interfaces/interface';

const initialState: BlogsState = {
  blogs: blogData,
};
const blogCollectionSlice = createSlice({
  name: 'blogsCollection/fetch',
  initialState,
  reducers: {
    setLoadedBlogs: (state, action: PayloadAction<{ blogData: Ipost[] }>) => {
      const newBlogs = action.payload.blogData;
      state.blogs = [...state.blogs, ...newBlogs];
    },
  },
});

export const { setLoadedBlogs } = blogCollectionSlice.actions;

export default blogCollectionSlice.reducer;

export const selectedBlogs = (state: { blogsCollection: BlogsState }) =>
  state.blogsCollection;
