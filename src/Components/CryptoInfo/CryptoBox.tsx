
import  { useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectedBlogs } from '../../redux/slices/Blogs/BlogSlice';
import { AppDispatch } from '../../redux/store';
import { fetchBlogApiSlice } from '../../redux/slices/Blogs/BlogApiSlice';
import { FetchBlogData } from '../../interfaces/interface';
import BlogColumn from './blogColumn';
import CustomDataGrid from '../DataGrid';
import SearchBar from '../SearchBar';

const AddBlogComp = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const columns = BlogColumn()

    const dispatch = useDispatch()
    const blogsData = useSelector(selectedBlogs).blogs

    useEffect(() => {
            const userType: FetchBlogData = {
                userType: "user"
            };
            (dispatch as AppDispatch)(fetchBlogApiSlice(userType));
    }, [dispatch]);

    console.log(blogsData)

    const filteredRows = blogsData.filter((row) =>
        row?._id?.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (

        <Box sx={{ width: "100%", position: "relative" }} className="sm:w-full overflow-hidden mx-auto ">
            <Paper sx={{ mb: 2, overflow: "hidden", borderRadius: 4, padding: 2 }}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <CustomDataGrid  getRowId={(row: { _id?: string }) => row._id || ''} columns={columns} rows={[filteredRows[1]]} />
            </Paper>
        </Box>
    );
};

export default AddBlogComp;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

// export default function QuickFilteringGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Employee',
//     visibleFields: VISIBLE_FIELDS,
//     rowLength: 1,
//   });

//   // Otherwise filter will be applied on fields such as the hidden column id
//   const columns = React.useMemo(
//     () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
//     [data.columns],
//   );

//   return (
//     <Box sx={{width: 1 }}>
//       <DataGrid
//         {...data}
//         disableColumnFilter
//         disableColumnSelector
//         disableDensitySelector
//         columns={columns}
//         hideFooter={true}
//         slots={{ toolbar: GridToolbar }}
       
//       />
//     </Box>
//   );
// }