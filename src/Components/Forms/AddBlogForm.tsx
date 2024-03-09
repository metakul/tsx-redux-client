import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addBlog } from '../../redux/slices/authApiSlice';
// import { AppDispatch } from '../../redux/store';
import { Ipost } from '../../interfaces/interface';
import { TextField, Typography, Button, Box, Grid } from '@mui/material';
// import { type } from './../../redux/types';"
import CustomDialog from '../Dailog/Dailog';

interface AddBlogProps {
    onFormSubmit: (blogData: Ipost) => void;
}
const AddBlogForm: React.FC<AddBlogProps> = () => {
    //   const dispatch = useDispatch(); 
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const blogData: Ipost = {
                title: "",
                description: "",
                image: "",
                author: "",
                categories: []
            };
            console.log(blogData)

            // Dispatch the login action with correct action type
            //   (dispatch as AppDispatch)(loginUser(loginData));

        } catch (error) {
            console.error('Login failed In LoginPage:', error);
        }
    };

    return (

        // #TODO add Custom drawer
        <CustomDialog
            open={isDialogOpen}
            onClose={() => setDialogOpen(!isDialogOpen)}
            triggerButtonText={"Add Blog"}
            title={"New Blog"}
            description={"This is adding for New Blog Page"}
        >
            <Grid container sx={{
                minWidth: "100%"
            }} >
                <Grid xs={12}  >
                    <Typography variant="h3">
                        Title
                    </Typography>
                    <TextField
                        fullWidth
                        value="Freja Johnsen"
                        placeholder="Enter your full name"
                    />
                </Grid>

                <Grid xs={12}>
                    <Typography variant="h3">
                        Description
                    </Typography>

                    <TextField
                        fullWidth
                        value="freja@example.com"
                        placeholder="Enter your email"
                    />
                </Grid>
                <Grid xs={12}>
                    <Typography variant="h3">
                        Author
                    </Typography>
                    <TextField
                        fullWidth
                        value="freja@example.com"
                        placeholder="Enter your email"
                    />
                </Grid>



            </Grid>
            <Box style={{
            }}>
                <Button onClick={handleFormSubmit}>Save</Button>
            </Box>
        </CustomDialog>

    );
};

export default AddBlogForm;
