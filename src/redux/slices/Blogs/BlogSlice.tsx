import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogsState, Ipost } from '../../../interfaces/interface';

const initialState: BlogsState = {
  blogs: [],
};
const blogCollectionSlice = createSlice({
  name: 'blogsCollection',
  initialState,
  reducers: {
    setLoadedBlogs: (state, action: PayloadAction<{ blogData: Ipost[] }>) => {
      const loadedBlogs = action.payload.blogData;
      state.blogs = [...loadedBlogs];
    },
    addBlog: (state, action: PayloadAction<Ipost>) => {
      state.blogs.push(action.payload);
    },
  },
});

export const { setLoadedBlogs, addBlog } = blogCollectionSlice.actions;

export default blogCollectionSlice.reducer;

export const selectedBlogs = (state: { blogsCollection: BlogsState }) =>
  state.blogsCollection;
