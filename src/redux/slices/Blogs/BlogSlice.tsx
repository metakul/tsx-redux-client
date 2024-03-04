import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { blogData } from './initialData';
import { BlogsState } from '../../../interfaces/interface';

const initialState: BlogsState = {
  blogs: blogData,
};
const blogCollectionSlice = createSlice({
  name: 'blogsCollection/fetch',
  initialState,
  reducers: {
    setLoadedBlogs: (state, action: PayloadAction<{ blogData: unknown[] }>) => {
      console.log(action.payload)
      state.blogs = action.payload.blogData;
    },
  },
});

export const { setLoadedBlogs } = blogCollectionSlice.actions;

export default blogCollectionSlice.reducer;

export const selectedBlogs = (state: { blogsCollection: BlogsState }) =>
  state.blogsCollection;
