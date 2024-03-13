import React from 'react';

// icons
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { Typography } from '@mui/material';
import BlogInfoTab from './BlogInfoComp';

export interface SingleBlogInfoProps{
    // $todo change interface to have all details of blogs and send the deatils from blogpage
    cryptoId?:string
  }
const BlogDetails: React.FC<SingleBlogInfoProps> = () => {

  const tabs = [
    { value: <OtherHousesOutlinedIcon />, content: <Typography></Typography>, label: "Live Event" },
    { value: <StoreOutlinedIcon />, content: <Typography>This is Info Page</Typography>, label: "Information" },
    { value: <CategoryOutlinedIcon />, content:<Typography>Socials</Typography>, label: "Socials" },
  ];

  return (
      <BlogInfoTab tabs={tabs} />
  );
};

export default BlogDetails;
