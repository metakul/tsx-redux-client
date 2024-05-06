import React from 'react';
import Button from '@mui/material/Button';
import {
  // MoreVert as MoreIcon,
  PreviewOutlined,
} from "@mui/icons-material";
import { Link } from 'react-router-dom';

const BlogColumn = (
  setOpenMenu: (value: React.SetStateAction<HTMLElement | null>) => void,
  setSelectedRowId: (value: React.SetStateAction<string | null>) => void
) => [
    { field: "postId", headerName: "Id", width: 120, editable: false },
    { field: "author", headerName: "Author Name", width: 120, editable: false },
    {
      field: "title",
      headerName: "Title",
      width: 120,
      editable: false,
    },
    {
      field: "description",
      headerName: "Description",
      width: 120,
      editable: false,
    },
    {
      field: "image",
      headerName: "Image Info",
      width: 120,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: false,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      editable: false,
      renderCell: (params: { row: { postId: string; }; }) => (
        <div>
          {/* <Button
            variant="contained"
            onClick={(event) => {
              setOpenMenu(event.currentTarget);
              setSelectedRowId(params.row.postId);
            }}
          >
            <MoreIcon />
          </Button> */}
          
          <Link  onClick={(event) => {
              setOpenMenu(event.currentTarget);
              setSelectedRowId(params.row.postId);
            }} to={`/blogDetails/${params.row.postId}`}>
        <Button variant="contained">
          <PreviewOutlined />
        </Button>
      </Link>
        </div>
      ),
    },
  ];

export default BlogColumn;