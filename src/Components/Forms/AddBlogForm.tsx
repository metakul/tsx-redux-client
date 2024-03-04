import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addBlog } from '../../redux/slices/authApiSlice';
// import { AppDispatch } from '../../redux/store';
import { Ipost } from '../../interfaces/interface';
import { TextField, Text, Flex, Button } from '@radix-ui/themes';
// import { type } from './../../redux/types';"
import CustomDialog from '../Dailog/Dailog';
interface AddBlogProps {
    onFormSubmit: unknown
}
const AddBlogForm: React.FC<AddBlogProps> = () => {
    //   const dispatch = useDispatch(); 

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
            triggerButtonText={"Add Blog"}
            title={"New Blog"}
            description={"This is adding for New Blog Page"}
        >
            <Flex direction="column" gap="3">
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Title
                    </Text>
                    <TextField.Input
                        defaultValue="Freja Johnsen"
                        placeholder="Enter your full name"
                    />
                </label>
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Description
                    </Text>
                    <TextField.Input
                        defaultValue="freja@example.com"
                        placeholder="Enter your email"
                    />
                </label>
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Author
                    </Text>
                    <TextField.Input
                        defaultValue="freja@example.com"
                        placeholder="Enter your email"
                    />
                </label>
            </Flex>
            <Flex gap="3" mt="4" justify="end">
                <Button onClick={handleFormSubmit}>Save</Button>
            </Flex>
        </CustomDialog>

    );
};

export default AddBlogForm;
