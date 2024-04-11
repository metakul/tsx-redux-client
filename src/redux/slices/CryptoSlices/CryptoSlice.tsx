import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  CryptoData } from '../../../interfaces/interface';

interface CryptoInfo {
  _id: string;
  cryptoData: CryptoData;
}

const initialState: CryptoInfo[] = [];

const cryptoCollection = createSlice({
  name: 'cryptoCollection',
  initialState,
  reducers: {
    fetchSingleCryptoInfo: (state, action: PayloadAction<CryptoInfo>) => {
      const { _id, cryptoData } = action.payload;
      // Check if the ID already exists in state
      const existingCryptoIndex = state.findIndex(item => item._id === _id);
      if (existingCryptoIndex !== -1) {
        // If the ID exists, update the crypto data
        state[existingCryptoIndex].cryptoData = cryptoData;
      } else {
        // If the ID doesn't exist, add a new entry
        state.push({ _id, cryptoData });
      }
    },
  },
});

export const { fetchSingleCryptoInfo } = cryptoCollection.actions;

export default cryptoCollection.reducer;

export const selectedCryptos = (state: { cryptoCollection: CryptoInfo[] }) =>
  state.cryptoCollection;
