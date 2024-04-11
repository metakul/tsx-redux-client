
import { ConnectWallet, useAddress, useTokenBalance } from "@thirdweb-dev/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import SingleNftCard from "../../Components/Card/SingleNftCard";
import { Typography } from "@mui/material";
// If used on the FRONTEND pass your 'clientId'

const nftDropContractAddress = "0x710E9161e8A768c0605335AB632361839f761374"
const tokenContractAddress = "0xE9fd323D7B1e4cFd07C657E218F7da16efd6532f"
const stakingContractAddress = "0x7615Cc203dDe705bFD65C42CEAcA7e15eB41b11b"


const Mywallet = () => {
  const address = useAddress();
  const [, setLoading] = useState(true); // New loading state
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract } = useContract(stakingContractAddress);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);

  const [claimableRewards, setClaimableRewards] = useState();
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (address && nftDropContract) {
          setLoading(false);

          const stakeInfo = await contract?.call("getStakeInfo", [address]);
          setClaimableRewards(stakeInfo[1]);
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    // Check if address is not null before fetching balance
    if (address !== null && nftDropContract) {
      setLoading(true);
      fetchBalance();
    }

  }, [address, contract, nftDropContract]);

  return (
    <main className="pt-[3.5rem] lg:pt-8">
      <h2 className="font-display text-4xl font-medium  dark:text-white"> NFT UnStaking</h2>
       <ConnectWallet />
      
      <p className="mt-4" >
        Claimable Balance: <b>
          {!claimableRewards
            ? <ConnectWallet />
            : ethers.utils.formatUnits(claimableRewards, 18)}
        </b>{" "}
        {tokenBalance?.symbol}
      </p>

      <section className="relative py-2">

        <div className="grid grid-cols-2 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
          {stakedTokens && stakedTokens[0].length>0 ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            stakedTokens[0]?.map((stakedToken: { toNumber: () => any; toString: () => any; }) => (
              <SingleNftCard
                tokenId={stakedToken.toNumber()}
                key={stakedToken.toString()}
              />
            ))
          ) : (
            <Typography variant="h3">
              No NFT's To UnStake
            </Typography>
          )}
        </div>



      </section>
    </main >
  );
};

export default Mywallet;


