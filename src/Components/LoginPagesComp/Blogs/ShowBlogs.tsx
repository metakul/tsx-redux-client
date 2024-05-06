
import  React, { useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectedBlogs } from '../../../redux/slices/Blogs/BlogSlice';
import { AppDispatch } from '../../../redux/store';
import { fetchBlogApiSlice } from '../../../redux/slices/Blogs/BlogApiSlice';
import { FetchBlogData } from '../../../interfaces/interface';
import BlogColumn from './blogColumn';
import CustomDataGrid from '../../DataGrid';
import SearchBar from '../../SearchBar';
// import UserOptionsMenu from '../../OptionMenu';
// import { Person as PersonIcon, DeleteOutline as DeleteIcon } from "@mui/icons-material";


interface BlogInfo {
    status: string;
  }

const AddBlogComp: React.FC<BlogInfo>=({status}) => {

    // const options = [
    //     { label: "Approve", value: "approve", icon: PersonIcon },
    //     { label: "Scheduled Post", value: "reject", icon: PersonIcon },
    //     { label: "Edit", value: "suspend", icon: DeleteIcon },
    //     { label: "Revoke Post", value: "suspend/revoke", icon: DeleteIcon }
    // ];

    const [searchQuery, setSearchQuery] = useState("");
    const [/*openMenu*/, setOpenMenu] = useState<HTMLElement | null>(null);
    const [/*selectedRowId*/, setSelectedRowId] = useState<string | null>(null);

    const columns = BlogColumn(setOpenMenu, setSelectedRowId)

    const dispatch = useDispatch()
    const blogsData = useSelector(selectedBlogs).blogs

    useEffect(() => {
            const userType: FetchBlogData = {
                userType: "user",
            };
            (dispatch as AppDispatch)(fetchBlogApiSlice({ fetchBlogData: userType,status:status }));
    }, [dispatch, status]);

        const filteredRows = blogsData.filter((row) =>
            row?.status === status && row?.postId?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        

    // const updateBlogStatus = (status: unknown) => {
    //     // Assuming updateUserByPage takes userId and status to update the user
    //     console.log(status)
    //     setOpenMenu(null);
    // };

    return (

        <Box sx={{ width: "100%", position: "relative" }} className="sm:w-full overflow-hidden mx-auto ">
            <Paper sx={{ mb: 2, overflow: "hidden", borderRadius: 4, padding: 2 }}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <CustomDataGrid  getRowId={(row: { postId?: string }) => row.postId || ''} columns={columns} rows={filteredRows} />
                {/* <UserOptionsMenu
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    options={options}
                    selectedRowId={selectedRowId}
                    onClick={updateBlogStatus}
                /> */}
            </Paper>
        </Box>
    );
};

export default AddBlogComp;