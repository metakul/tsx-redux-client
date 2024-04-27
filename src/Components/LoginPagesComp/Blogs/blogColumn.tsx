import React from 'react';
import Button from '@mui/material/Button';
import {
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from 'react-router-dom';

const BlogColumn = (
  setOpenMenu: (value: React.SetStateAction<HTMLElement | null>) => void,
  setSelectedRowId: (value: React.SetStateAction<string | null>) => void
) => [
    { field: "_id", headerName: "Id", width: 120, editable: false },
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
      field: "actions",
      headerName: "Actions",
      width: 120,
      editable: false,
      renderCell: (params: { row: { id: string; }; }) => (
        <div>
          <Button
            variant="contained"
            onClick={(event) => {
              setOpenMenu(event.currentTarget);
              setSelectedRowId(params.row.id);
            }}
          >
            <MoreIcon />
          </Button>
          
          <Link to="/blogs/:id">
            <Button
              variant="contained"
            >
              <SettingsOutlinedIcon />
            </Button>
          </Link>
        </div>
      ),
    },
  ];

export default BlogColumn;