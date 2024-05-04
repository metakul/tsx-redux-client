import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box, IconButton, Paper, MenuItem } from '@mui/material';
import SatelliteAltOutlinedIcon from '@mui/icons-material/SatelliteAltOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { uploadFileToIPFS, uploadJSONToIPFS } from '../../scripts/ipfsHandler';
import BreadCrumbs from '../../Components/elements/BreadCrumbs';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
const jobPositions = [
    { value: 'frontend_developer', label: 'Frontend Developer', icon: <SatelliteAltOutlinedIcon fontSize="large" />, positionsAvailable: 2 },
    { value: 'collab_manager', label: 'Collab Manager', icon: <Groups3OutlinedIcon fontSize="large" />, positionsAvailable: 3 },
    { value: 'blockchain_developer', label: 'Blockchain Developer', icon: <DeveloperModeOutlinedIcon fontSize="large" />, positionsAvailable: 1 },
];

const Career = () => {
    const [formParams, updateFormParams] = useState({ name: '', email: '', position: '', linkdin: '', portfolio: '', cover: '', mobile: '', resume: '' });
    const [fileURL, setFileURL] = useState(null);
    const [disableButton, setDisableButton] = useState(true);
    const [message, updateMessage] = useState('');
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async (e) => {
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

    async function saveJob(e) {
        e.preventDefault();
        try {
            const metadataURL = await uploadMetadataToIPFS();
            alert("Successfully Submitted your Resume at " + metadataURL);
            console.log("Resume saved at " + metadataURL);
            updateFormParams({ name: '', email: '', position: '', linkdin: '', portfolio: '', mobile: '', cover: '' });
            setFileURL('');
            updateMessage('');
            setDisableButton(true);
        } catch (e) {
            alert("Upload error" + e);
        }
    }

    // Function to open the resume in a new tab
    const openResume = () => {
        if (fileURL) {
            window.open(fileURL, '_blank');
        }
    };

    return (
        <Container >
            <Container>
                <BreadCrumbs currentPath={location.pathname} />
                <Typography variant="h3" align="center" sx={{ mb: 4, mt: 2 }}>
                    Open Positions
                </Typography>
                <Grid container spacing={4}>
                    {jobPositions.map((job) => (
                        <Grid item lg={4} md={6} key={job.value}>
                            <Paper elevation={3}>
                                <Box p={3}>
                                    {job.icon}
                                    <Typography variant="h6">{job.label}</Typography>
                                    <Typography variant="body2">{job.positionsAvailable} positions available</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container sx={{
                mb: 4
            }}>
                <Box sx={{
                    mt: 2
                }}>
                    <Typography variant="h4">Apply Now</Typography>
                    <Typography variant="body2">We're always happy to onboard new talent in the web3 space!</Typography>

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
                            select
                            label="Apply for Position*"
                            value={formParams.position}
                            onChange={(e) => updateFormParams({ ...formParams, position: e.target.value })}
                            required
                        >
                            {jobPositions.map((job) => (
                                <MenuItem key={job.value} value={job.value}>
                                    {job.label}
                                </MenuItem>
                            ))}
                        </TextField>
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
                                <Typography  variant="body2" >
                                    {message} 
                                    {message &&
                                <RemoveRedEyeOutlinedIcon onClick={openResume}/>
                                    }
                                </Typography>
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
                            Apply Now
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <div class="map">
                <div class="container-fluid px-0">
                    <div class="map__wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799120522!2d-74.25987460306818!3d40.697670064076384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1647360575411!5m2!1sen!2sbd"
                            allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Career;
