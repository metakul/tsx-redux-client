
import { useAddress, useTokenBalance } from "@thirdweb-dev/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import  { useState, useEffect } from 'react';
import {  ethers } from "ethers";
import SingleNftCard from "../../Components/Card/SingleNftCard";
// If used on the FRONTEND pass your 'clientId'

const nftDropContractAddress = "0x710E9161e8A768c0605335AB632361839f761374"
const tokenContractAddress = "0xE9fd323D7B1e4cFd07C657E218F7da16efd6532f"
const stakingContractAddress = "0x7615Cc203dDe705bFD65C42CEAcA7e15eB41b11b"


const Mywallet = () => {
  const address = useAddress();
  const [loading, setLoading] = useState(true); // New loading state
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
      setLoading(true); // Set loading to true before fetching data
      fetchBalance();
    }

  }, [address, contract, nftDropContract]);

  // async function stakeNft(id) {
  //   if (!address) return;

  //   const isApproved = await nftDropContract?.isApproved(
  //     address,
  //     stakingContractAddress
  //   );
  //   if (!isApproved) {
  //     await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
  //   }
  //   await contract?.call("stake", [[id]]);
  // }


  return (
    <main className="pt-[3.5rem] lg:pt-8">
      <h2 className="mb-2 font-display text-4xl font-medium  dark:text-white"> NFT Staking</h2>
      <p >
                Claimable Balance: <b>
                  {!claimableRewards
                    ? "Loading..."
                    : ethers.utils.formatUnits(claimableRewards, 18)}
                </b>{" "}
                {tokenBalance?.symbol}
              </p>


      <section className="relative py-2">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
        </picture>
        <div className="container">


          <div className="tab-content">
            <div className="tab-pane fade show active" id="items" role="tabpanel" aria-labelledby="items-tab">
              <div className="grid grid-cols-2 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                {loading ? (
                  <div className="text-center">Loading...</div>
                ) : stakedTokens ? (
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  stakedTokens[0]?.map((stakedToken: { toNumber: () => any; toString: () => any; }) => (
                    <SingleNftCard
                      tokenId={stakedToken.toNumber()}
                      key={stakedToken.toString()}
                    />
                  ))
                ) : (
                  <>
                    <article>
                      <div  className="block rounded-2.5xl border border-jacarta-100  p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700" >
                        <figure className="relative">
                          <img
                            src="./img/products/item_3.jpg"
                            alt="img"
                            className="w-full rounded-[0.625rem]"
                            loading="lazy"
                          />
                          <div 
                            className="absolute top-3 right-3 flex items-center space-x-1 rounded-md  p-2 dark:bg-jacarta-700"
                          >
                            <span
                              className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                              data-tippy-content="Favorite"
                            >

                            </span>
                          </div>
                        </figure>
                        <div className="mt-7 flex items-center justify-between">
                          <span className="font-display text-base hover:text-accent dark:text-white">
                            No Nfts to UnStake.
                          </span>
                          <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                            <a
                              href="#"
                              className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                              role="button"
                              id="itemActions2"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                            </a>

                          </div>

                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-display text-base hover:text-accent dark:text-white">
                            Join discord to Get your first gasless nft.
                          </span>


                        </div>
                        <div className="mt-8 flex items-center justify-between">
                          <button
                            className="font-display text-sm font-semibold text-accent"
                            data-bs-toggle="modal"
                            data-bs-target="#buyNowModal"
                          >
                            Buy One Now
                          </button>
                          <div
                            className="font-display text-sm font-semibold text-accent"
                            data-bs-toggle="modal"
                            data-bs-target="#buyNowModal"
                          >
                            Buy One Now
                          </div>

                        </div>
                      </div>
                    </article>
                  </>
                )}
              </div>

            </div>
          </div>


        </div>
      </section>
    </main >
  );
};

export default Mywallet;


