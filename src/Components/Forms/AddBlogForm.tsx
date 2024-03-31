import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlogApiSlice } from '../../redux/slices/Blogs/BlogApiSlice';
import { AppDispatch } from '../../redux/store';
import { Ipost } from '../../interfaces/interface';
import { Typography, Button, Grid } from '@mui/material';
import CustomDialog from '../Dailog/Dailog';
import CustomTextField from '../TextFeild';
import ImageUploader from '../ImageUploader';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface AddBlogProps { }

interface ErrorMessages {
    [key: string]: string;
}

const newErrors: ErrorMessages = {
    title: '',
    image: '',
    author: '',
    categories: '',
    cryptoSymbol: '',
};

const AddBlogForm: React.FC<AddBlogProps> = () => {
    const dispatch = useDispatch();
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<Ipost>({
        title: '',
        image: '',
        author: '',
        categories: [],
        cryptoSymbol: '',
    });
    const [description, setDescription] = useState('');
    const [isError, setIsError] = useState<boolean>(false);


    const [errors, setErrors] = useState<ErrorMessages>(newErrors);

    const handleFormSubmit = async (event: React.FormEvent) => {
        setIsError(false);
        event.preventDefault();
        // Validate form fields

        Object.keys(formData).forEach((key) => {
            const formValue = formData[key as keyof Ipost];
            if (typeof formValue === 'string') {
                if (formValue.trim() === '' && key !== 'description') {
                    newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                    setIsError(true)
                }
            } else if (Array.isArray(formValue)) {
                if (formValue.length === 0 && key !== 'description') {
                    newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                    setIsError(true)
                }
            }
        });
        setErrors(newErrors as typeof errors);

        // If there are no errors, dispatch action to add blog
        if (Object.values(newErrors).every(error => !error)) {
            setIsError(false);

            // Dispatch action to add blog
            (dispatch as AppDispatch)(addBlogApiSlice({ newBlogData: { ...formData, description }, setDialogOpen }));
        }
    };

    const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Ipost) => {
        if (field === 'categories') {
            // Split the input value by comma and trim each category
            const categoriesArray = e.currentTarget.value.split(',').map(category => category.trim());
            setFormData({ ...formData, [field]: categoriesArray });
        } else {
            setFormData({ ...formData, [field]: e.currentTarget.value });
        }
    };

    return (
        <CustomDialog
            open={isDialogOpen}
            onClose={() => setDialogOpen(!isDialogOpen)}
            triggerButtonText={'Add Blog'}
            title={'New Blog'}
            description={'This is adding for New Blog Page'}
        >
            <form onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3">Title</Typography>
                        <CustomTextField
                            id="title"
                            type="text"
                            label="Title"
                            value={formData.title}
                            onChange={(e) => handleChange(e, 'title')}
                            placeholder="Enter title"
                            error={errors.title}
                            isError={isError}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Description</Typography>
                        <ReactQuill
                            theme="snow"
                            value={description}
                            onChange={(value) => setDescription(value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="h3">Image</Typography>
                        <ImageUploader/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Author</Typography>
                        <CustomTextField
                            id="author"
                            type="text"
                            label="Author"
                            value={formData.author}
                            onChange={(e) => handleChange(e, 'author')}
                            placeholder="Enter author"
                            error={errors.author}
                            isError={isError}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Categories</Typography>
                        <CustomTextField
                            id="categories"
                            type="text"
                            label="Categories (comma separated)"
                            value={formData.categories.join(',')}
                            onChange={(e) => handleChange(e, 'categories')}
                            placeholder="Enter categories"
                            error={errors.categories}
                            isError={isError}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Crypto Symbol</Typography>
                        <CustomTextField
                            id="cryptoSymbol"
                            type="text"
                            label="Crypto Symbol"
                            value={formData.cryptoSymbol}
                            onChange={(e) => handleChange(e, 'cryptoSymbol')}
                            placeholder="Enter crypto symbol"
                            error={errors.cryptoSymbol}
                            isError={isError}

                        />
                    </Grid>
                </Grid>
                <Button type="submit">Save</Button>
            </form>
        </CustomDialog>
    );
};

export default AddBlogForm;
