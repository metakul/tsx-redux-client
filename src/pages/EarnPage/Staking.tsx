import {
  Container,
} from '@mui/material';
import NftCard from '../../Components/Card/NftCard';
import { ConnectWallet, useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import { BalanceItem } from '../../interfaces/interface';
import toast from 'react-hot-toast';
const nftDropContractAddress = "0x710E9161e8A768c0605335AB632361839f761374"
const stakingContractAddress = "0x7615Cc203dDe705bFD65C42CEAcA7e15eB41b11b"


const Staking = () => {
  const address=useAddress()

  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );
  const { contract,  } = useContract(stakingContractAddress);
  let { data: ownedNfts }= useOwnedNFTs(nftDropContract, address);
  
  async function stakeNft(id: unknown) {
    if (!address) return;
    const toastId = toast.loading('Processing...');

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
    }
    if(nftDropContract){
   const stakeStart= await contract?.call("stake", [[id]]).then(async ()=>{
     toast.success(`#${id} NFT staked succcessfully`, { id: toastId })
    ownedNfts =await nftDropContract.erc721.getOwned(address);
   }).catch(()=>{
    toast.error("Error staking nft", { id: toastId })
   })
   console.log(stakeStart)
  }

  }
  return (
    <Container className=''>
        <ConnectWallet/>
        <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-2 lg:grid-cols-4 mt-4">

        <NftCard balance={ownedNfts as BalanceItem[]} handleNftButtonText={"Stake Now"} onHandleButtonClick={stakeNft} loadingMessage={!address ? 'Loading Owner NFT. Keep Your wallet Conencted.' : "No Nfts to Stake"}/>
        </div>
    </Container>
  );
};

export default Staking;