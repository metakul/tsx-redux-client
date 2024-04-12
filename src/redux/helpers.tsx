import { ApiSuccess, ClaimNftInterface, ApiError} from '../interfaces/interface';
import toast from 'react-hot-toast';
import { allowlistProof } from "./slices/Web3Profile/whitelist";

export const claimNft = async ({ address, claim }: ClaimNftInterface) => {
  try {
    if (!address) {
      toast.error("Wallet not connected");
      return;
    }
    const toastId = toast.loading('Processing...');
    
    // Define a separate async function to handle the claim operation
    const performClaim = async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        const res = await claim({
          args: [address, 1, "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", 0, allowlistProof, []]
        });
        return res;
      } catch (err) {
        throw err;
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await performClaim().then((res: unknown) => {
      console.log(res);
      
      toast.success("NFT Claimed Successfully", { id: toastId });
      const apiSuccess: ApiSuccess = {
        statusCode: 200,
        message: 'Mint Successfull',
        data: res as object,
      };
      console.log(apiSuccess);
      return apiSuccess;
    }).catch((err: unknown) => {
      console.log(err);
      toast.error("Error Claiming NFT", { id: toastId });
    });
    return data;
  } catch (error) {
    const castedError = error as ApiError;
    console.error('Error Claiming NFT', error);
    toast.error("Error Claiming NFT");
    throw castedError?.error === "string" ? castedError?.error : 'Unknown Error';
  }
};
