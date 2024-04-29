import { SetStateAction, useState } from "react";
import { Button, TextField } from "@mui/material";
import * as s from "./MintFormCss";
import { uploadJSONToIPFS } from "../../../scripts/ipfsHandler";
import ImageUploader from "../../../Components/ImageUploader";

function Home() {
  const [formParams, updateFormParams] = useState({ name: '', description: '', external_url: '' });
  const [fileURL, setFileURL] = useState(null);
  const [disableButton, setDisableButton] = useState(true);

  async function onChangeFile(e: SetStateAction<null>) {

    try {
      console.log("Uploaded image to Pinata: ", e);
      setFileURL(e);
      setDisableButton(false);
    } catch (e) {
      console.log("Error during file upload", e);
    }
  }

  async function uploadMetadataToIPFS() {
    const { name, description, external_url } = formParams;
    if (!name || !description || !fileURL) return;

    const nftJSON = { name, description, external_url, image: fileURL };

    try {
      const response = await uploadJSONToIPFS(nftJSON);
      if (response.success === true) {
        console.log("Uploaded JSON to Pinata: ", response);
        return response.pinataURL;
      }
    } catch (e) {
      console.log("error uploading JSON metadata:", e);
    }
  }

  async function mintNFT(e: { preventDefault: () => void; }) {
    e.preventDefault();

    try {
      const metadataURL = await uploadMetadataToIPFS();
      console.log(metadataURL);
      alert("Successfully Saved your NFT for future Mint");
      updateFormParams({ name: '', description: '', external_url: '' });
      window.location.replace("/");
    } catch (e) {
      alert("Upload error" + e);
    }
  }

  return (
    <s.Container>
      <s.ResponsiveWrapper >
        <s.TextInfo> * Required fields</s.TextInfo>
        <s.TextSubTitle>Image, Video, Audio, or 3D Model *</s.TextSubTitle>
        <s.TextInfo> File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</s.TextInfo>

        <ImageUploader register={onChangeFile} />
        <s.TextSubTitle>Name *</s.TextSubTitle>
        <TextField
          type="text"
          name="name"
          placeholder="Item Name"
          onChange={(e) => updateFormParams({ ...formParams, name: e.target.value })}
          value={formParams.name}
        />

        <s.TextSubTitle>External link</s.TextSubTitle>
        <s.TextInfo>OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</s.TextInfo>

        <TextField
          type="text"
          name="external_link"
          placeholder="https://yoursite.io/"
          value={formParams.external_url}
          onChange={(e) => updateFormParams({ ...formParams, external_url: e.target.value })}
        />

        <s.TextSubTitle>Description</s.TextSubTitle>
        <s.TextInfo>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</s.TextInfo>
        <TextField
          type="text"
          name="description"
          placeholder="Description"
          value={formParams.description}
          onChange={(e) => updateFormParams({ ...formParams, description: e.target.value })}
        />

        <Button variant="contained" onClick={mintNFT} disabled={disableButton}  sx={{
          mt:4
        }}>
          Mint NFT
        </Button>
        
        <s.TextInfo>Upload Image to enable Mint Button</s.TextInfo>
      </s.ResponsiveWrapper>
    </s.Container>
  );
}

export default Home;
