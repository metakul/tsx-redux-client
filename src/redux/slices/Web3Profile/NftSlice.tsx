import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NFTCollectionState } from '../../../interfaces/interface';

const initialState: NFTCollectionState = {
  nfts: [],
};
const nftCollectionSlice = createSlice({
  name: 'nftCollection',
  initialState,
  reducers: {
    setLoadedNfts: (state, action: PayloadAction<{ nfts: unknown[] }>) => {
      state.nfts = action.payload.nfts;
      const loadedNfts = action.payload.nfts;
      state.nfts = [...loadedNfts];
    },
  },
});

export const { setLoadedNfts } = nftCollectionSlice.actions;

export default nftCollectionSlice.reducer;

export const selectNftCollection = (state: { nftCollection: NFTCollectionState }) =>
  state.nftCollection;
