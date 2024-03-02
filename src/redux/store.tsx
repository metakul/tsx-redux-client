import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import NftCollectionReducer from "./slices/MetakulCollection/NftSlice"
import { useDispatch } from "react-redux";
import logger from 'redux-logger'
const store = configureStore({
  reducer: {
    auth:authReducer,
    nftCollection:NftCollectionReducer
  },
  middleware:getDefaultMiddlerware =>
    getDefaultMiddlerware().concat(logger),
    devTools:true
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store;
