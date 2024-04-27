import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import toast from "react-hot-toast";

const nftDropContractAddress = "0x710E9161e8A768c0605335AB632361839f761374"
const stakingContractAddress = "0x7615Cc203dDe705bFD65C42CEAcA7e15eB41b11b"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SingleNftCard = ({ tokenId }: any) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  return (
    <>
      {nft && (
            <div className=" rounded-2.5xl border border-jacarta-100 transition-shadow hover:shadow-lg max-w-72">
        <div className="w-full rounded-t-2.5xl border">

          {nft.metadata && (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              className=" w-full rounded-t-2.5xl"
            />
          )}
          </div>
          <h3>{nft.metadata.name}</h3>
          <div className="mt-8 mb-4 flex items-center justify-between ml-4">

          <Web3Button
            action={async (contract) => {
              // Start a loading toast
              const toastId = toast.loading('Processing...');
              try {
                // Call the contract method
                await contract?.call("withdraw", [[nft.metadata.id]]);
                // Update the toast on success
                toast.success('Withdraw successful!', { id: toastId });
              } catch (error) {
                // Update the toast on error
                toast.error('Withdraw failed.', { id: toastId });
              }
            }}
            contractAddress={stakingContractAddress}
          >
            Withdraw
          </Web3Button>
        </div>
        </div>
      )}
    </>
  );
};
export default SingleNftCard;
