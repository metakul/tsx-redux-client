import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NFTCollectionState } from '../../../interfaces/interface';
import { nftData } from './initialData';

const initialState: NFTCollectionState = {
  nfts: nftData,
};

const nftCollectionSlice = createSlice({
  name: 'nftCollection',
  initialState,
  reducers: {
    setLoadedNfts: (state, action: PayloadAction<{ nfts: object }>) => {
      state.nfts = action.payload.nfts;
    },
  },
});

export const { setLoadedNfts } = nftCollectionSlice.actions;

export default nftCollectionSlice.reducer;

export const selectNftCollection = (state: { nftCollection: NFTCollectionState }) =>
  state.nftCollection;
