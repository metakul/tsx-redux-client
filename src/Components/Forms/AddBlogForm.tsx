import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlogApiSlice } from '../../redux/slices/Blogs/BlogApiSlice';
import { AppDispatch } from '../../redux/store';
import { Ipost } from '../../interfaces/interface';
import { Typography, Button, Grid } from '@mui/material';
import CustomDialog from '../Dailog/Dailog';
import CustomTextField from '../TextFeild';

interface AddBlogProps { }

interface ErrorMessages {
    [key: string]: string;
}

const newErrors: ErrorMessages = {
    title: '',
    description: '',
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
        description: '',
        image: '',
        author: '',
        categories: [],
        cryptoSymbol: '',
    });
    const [errors, setErrors] = useState<ErrorMessages>(newErrors);

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Validate form fields

        Object.keys(formData).forEach((key) => {
            const formValue = formData[key as keyof Ipost];
            if (typeof formValue === 'string') {
                if (formValue.trim() === '' && key !== 'description') {
                    newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                }
            } else if (Array.isArray(formValue)) {
                if (formValue.length === 0 && key !== 'description') {
                    newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                }
            }
        });
        setErrors(newErrors as typeof errors);

        // If there are no errors, dispatch action to add blog
        if (Object.values(newErrors).every(error => !error)) {
                // Dispatch action to add blog
                (dispatch as AppDispatch)(addBlogApiSlice({ newBlogData: formData, setDialogOpen }));
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Description</Typography>
                        <CustomTextField
                            id="description"
                            type="text"
                            label="Description"
                            value={formData.description}
                            onChange={(e) => handleChange(e, 'description')}
                            placeholder="Enter description"
                            error={errors.description}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Image</Typography>
                        <CustomTextField
                            id="image"
                            type="text"
                            label="Image URL"
                            value={formData.image}
                            onChange={(e) => handleChange(e, 'image')}
                            placeholder="Enter image URL"
                            error={errors.image}
                        />
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
                        />
                    </Grid>
                </Grid>
                <Button type="submit">Save</Button>
            </form>
        </CustomDialog>
    );
};

export default AddBlogForm;
