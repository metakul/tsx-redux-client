import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogsState, Ipost } from '../../../../interfaces/interface';

const initialState: BlogsState = {
  blogs: [],
};
const CryptoInfoSlice = createSlice({
  name: 'cryptoInfo',
  initialState,
  reducers: {
    setCryptoInfo: (state, action: PayloadAction<{ blogData: Ipost[] }>) => {
      const loadedBlogs = action.payload.blogData;
      state.blogs = [...loadedBlogs];
    },
  },
});

export const { setCryptoInfo } = CryptoInfoSlice.actions;

export default CryptoInfoSlice.reducer;

export const selectedBlogs = (state: { blogsCollection: BlogsState }) =>
  state.blogsCollection;
