import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogsState, CryptoData, Ipost } from '../../../interfaces/interface';

const initialState: BlogsState = {
  blogs: []as Ipost[],
};
interface CryptoInfo {
  _id: string;
  cryptoData: CryptoData;
}

const blogCollectionSlice = createSlice({
  name: 'blogsCollection',
  initialState,
  reducers: {
    setLoadedBlogs: (state, action: PayloadAction<{ blogData: Ipost[] }>) => {
      const loadedBlogs = action.payload.blogData;
      loadedBlogs.forEach(blog => {
        if (!state.blogs.some(existingBlog => existingBlog._id === blog._id)) {
          state.blogs.push(blog);
        }
      })
    },
    addBlog: (state, action: PayloadAction<Ipost>) => {
      state.blogs.push(action.payload);
    },
    fetchCryptoInfo: (state, action: PayloadAction<CryptoInfo>) => {
      const { _id, cryptoData } = action.payload;
      const index = state.blogs.findIndex(blog => blog._id === _id);
      if (index !== -1) {
        state.blogs[index].cryptoData = cryptoData;
      }
    },
  },
});

export const { setLoadedBlogs, addBlog, fetchCryptoInfo } = blogCollectionSlice.actions;

export default blogCollectionSlice.reducer;

export const selectedBlogs = (state: { blogsCollection: BlogsState }) =>
  state.blogsCollection;
