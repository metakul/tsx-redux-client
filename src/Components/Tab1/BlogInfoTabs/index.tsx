import React from 'react';

// icons
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { Typography } from '@mui/material';
import BlogInfoTab from './BlogInfoComp';
import CryptoInfoPage from '../../CryptoInfo';
import SingleBlogDetails from '../../BlogDetails.tsx';

export interface SingleBlogInfoProps{
    // $todo change interface to have all details of blogs and send the deatils from blogpage
    cryptoSymbol?:string
    _blogId:string
  }

const BlogDetails: React.FC<SingleBlogInfoProps> = ({_blogId,cryptoSymbol}) => {

  const tabs = [
    { value: <OtherHousesOutlinedIcon />, content: <SingleBlogDetails _id={_blogId}/>, label: "Read More" },
    { value: <StoreOutlinedIcon />, content: <CryptoInfoPage _id={_blogId} cryptoSymbol={cryptoSymbol}/>, label: "Information" },
    { value: <CategoryOutlinedIcon />, content:<Typography>Socials</Typography>, label: "Socials" },
  ];

  return (
      <BlogInfoTab tabs={tabs} />
  );
};

export default BlogDetails;
