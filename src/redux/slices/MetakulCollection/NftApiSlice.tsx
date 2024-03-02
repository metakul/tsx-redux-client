import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoadedNfts } from './NftSlice';
import { ApiError, CollectionInfo } from '../../../interfaces/interface';
import { ApiSuccess } from '../../../interfaces/interface';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// $TODO : set Sdk based on user choice from wallet

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK("polygon", {
  clientId: "ed7a4b64885c72be1dc347066f4e51ce",
});

export const LoadNftSlice = createAsyncThunk(
  'NftCollection/load',
  async ({ collectionAddress }: CollectionInfo, { rejectWithValue, dispatch }) => {
    try {
      const contract = await sdk.getContract(collectionAddress);
      const nfts = await contract.erc721.getAll();

      // Dispatch the setLoadedNfts action to update the state with the new data
      dispatch(setLoadedNfts({ nfts }));

      const apiSuccess: ApiSuccess = {
        statusCode: 200,
        message: 'Fetch Nft Request successful',
        data: nfts,
      };

      console.log(apiSuccess);
      return apiSuccess;

    } catch (error) {
      const castedError = error as ApiError;
      console.error('Fetch NFT Fails failed:', error);
      return rejectWithValue(castedError?.error === "string" ? castedError?.error : 'Unknown Error');
    }
  }
);