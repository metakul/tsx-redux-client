import { useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import {
  useContract,
  useAddress,
  ThirdwebNftMedia,
  useOwnedNFTs,
  useContractWrite,
  ConnectWallet,
} from "@thirdweb-dev/react";
import { Link } from 'react-router-dom';

import {
  StyledContainer, StyledContent,
} from '../../style.css';
import { ClaimNftInterface } from "../../interfaces/interface";
import { AppDispatch } from "../../redux/store";
import { ClaimNftSlice } from "../../redux/slices/Web3Profile/NftApiSlice";
import { useDispatch } from "react-redux";

const myNftDropContractAddress = "0x710E9161e8A768c0605335AB632361839f761374"

const MintPage = () => {
  const address = useAddress();
  const { contract: nftDrop } = useContract(myNftDropContractAddress);
  const [mintMsg,] = useState("")
  const dispatch = useDispatch()

  const { data: ownedNfts } = useOwnedNFTs(nftDrop, address);

  async function opensea(id: string) {
    const nft = id;
    console.log(`https://www.opensea.io/${myNftDropContractAddress}/${nft}`);
    window.open(
      `https://opensea.io/assets/matic/${myNftDropContractAddress}/${nft}`
    );
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contract } = useContract(myNftDropContractAddress);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { mutateAsync: claim } = useContractWrite(contract, "claim");

  const claimNftHandler: ClaimNftInterface = {
    address,
    claim
  };
  const handleClaimNft = async () => {
    (dispatch as AppDispatch)(ClaimNftSlice(claimNftHandler));
  }

  return (
    <Container sx={{mt:4}}>

      <div className="container mx-auto mt-8 ">
        <div
          className="featuredlaunch_rightCol"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid container sx={{mt:12}}>
            <Grid item xs={10}>
              <Typography variant="h2">
                GASLESS NFT Mint
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <ConnectWallet />
            </Grid>
          </Grid>
          <img
            src="https://media.discordapp.net/attachments/954642077340278825/1019585636375732285/6tckjj.gif"
            alt="NFT img"
            width="300px"
          />
          <StyledContainer>
            <button onClick={handleClaimNft} className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold  shadow-accent-volume transition-all hover:bg-accent-dark">
                Claim NFT
            </button>
            {mintMsg && <p>{mintMsg}</p> }
          </StyledContainer>
          <StyledContainer className="mt-4">
          <Link to="/wallet">
            <button className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold  shadow-accent-volume transition-all hover:bg-accent-dark"
            > Already Claimed? Stake Now</button>
          </Link>
            </StyledContainer>
        </div>

        <div className=" containerMint">

          {address &&
            <>
              <h3>Your Owned NFT</h3>
              <p style={{ marginTop: "0px", fontWeight: "bold" }}>
                ( Will Load After Mint )
              </p>
            </>
          }

          {ownedNfts?.map((nft) => (
            <StyledContent>
              <div
                key={nft.metadata.id.toString()}
                className=""
              >
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className="nftMedia"
                />
                <h3
                >
                  {nft.metadata.name}
                </h3>
                <Button
                  onClick={() => opensea(nft.metadata.id)}
                  className="mainButton"
                >
                  View on Opensea
                </Button>
              </div>
            </StyledContent>
          ))}
        </div>
      </div>
    </Container>

  );
};

export default MintPage;