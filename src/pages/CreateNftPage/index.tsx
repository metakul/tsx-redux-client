import  { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { uploadFileToIPFS, uploadJSONToIPFS } from '../../scripts/ipfsHandler';
 const CreateNft = () => {
    const [formParams, updateFormParams] = useState({ name: '', email: '', position: '', linkdin: '', portfolio: '', cover: '', mobile: '', resume: '' });
    const [fileURL, setFileURL] = useState('');
    const [disableButton, setDisableButton] = useState(true);
    const [message, updateMessage] = useState('Please Fill all required* fields.');
    const [uploading, setUploading] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFileChange = async (e:any) => {
        console.log("Uploading image to Pinata............ ");
        const file = e.target.files[0];
        try {
            setUploading(true);
            const response = await uploadFileToIPFS(file);
            if (response.success === true) {
                console.log("Uploaded image to Pinata: ", response.pinataURL);
                setFileURL(response.pinataURL);
                setDisableButton(false);
                updateMessage('Uploaded image: ' + file.name);
                setUploading(false);

            }
        } catch (e) {
            console.log("Error during file upload", e);
            setUploading(false);
            updateMessage('');
        }
    };

    async function uploadMetadataToIPFS() {
        const { name, email, position, linkdin, portfolio, mobile, cover } = formParams;
        if (!name || !email || !position || !fileURL) return;

        const nftJSON = {
            name,
            email,
            position,
            linkdin,
            portfolio,
            mobile,
            cover,
            resume: fileURL,
        };

        try {
            const response = await uploadJSONToIPFS(nftJSON);
            if (response.success === true) {
                console.log("Uploaded JSON to Pinata: ", response);
                return response.pinataURL;
            }
        } catch (e) {
            console.log("Error uploading JSON metadata:", e);
        }
    }

    async function saveJob(e: { preventDefault: () => void; }) {
        e.preventDefault();
        try {
            const metadataURL = await uploadMetadataToIPFS();
            alert("Successfully Submitted your Resume at " + metadataURL);
            console.log("Resume saved at " + metadataURL);
            updateFormParams({ name: '', email: '', position: '', linkdin: '', portfolio: '', mobile: '', cover: '',resume:'' });
            setFileURL('');
            updateMessage('Please Fill all required* fields.');
            setDisableButton(true);
        } catch (e) {
            alert("Upload error" + e);
        }
    }

    return (
        <Container className='container'>
         
            <Container sx={{
                mb: 4,
            }}>
                <Box >
                    <Typography variant="h4" >Create Your own NFT Now</Typography>
                    <Typography variant="body2">We're always happy to onboard new talent in the web3 space!</Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2 }}>
                        {message}
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Your Name*"
                            value={formParams.name}
                            onChange={(e) => updateFormParams({ ...formParams, name: e.target.value })}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Your Email*"
                            value={formParams.email}
                            onChange={(e) => updateFormParams({ ...formParams, email: e.target.value })}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Your No"
                            value={formParams.mobile}
                            onChange={(e) => updateFormParams({ ...formParams, mobile: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Apply for Position*"
                            value={formParams.position}
                            onChange={(e) => updateFormParams({ ...formParams, position: e.target.value })}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Linkdin"
                            value={formParams.linkdin}
                            onChange={(e) => updateFormParams({ ...formParams, linkdin: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Portfolio URL"
                            value={formParams.portfolio}
                            onChange={(e) => updateFormParams({ ...formParams, portfolio: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" alignItems="center">
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                id="resume-file-input"
                                onChange={handleFileChange}
                                required
                            />
                            <label htmlFor="resume-file-input">
                                <IconButton color="primary" component="span">
                                    <AttachFileIcon />
                                </IconButton>
                                Attach Resume*
                            </label>
                            {uploading && (
                                <img src={"loadingGif"} alt="Uploading..." style={{ marginLeft: '10px', width: '24px' }} />
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Cover Letter"
                            multiline
                            rows={4}
                            value={formParams.cover}
                            onChange={(e) => updateFormParams({ ...formParams, cover: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            onClick={saveJob}
                            disabled={disableButton}
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Mint Now
                        </Button>
                    </Grid>
                </Grid>
            </Container>
          
        </Container>
    );
};
export default CreateNft;