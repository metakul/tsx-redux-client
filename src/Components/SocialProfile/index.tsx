import React from 'react';
import {  useSelector } from 'react-redux';
import { BlogDetailsProps } from '../../interfaces/interface';
import { selectedBlogs } from '../../redux/slices/Blogs/BlogSlice';

const SingleBlogDetails: React.FC<BlogDetailsProps> = ({ _id }) => {
  const blogsData = useSelector(selectedBlogs).blogs

  const selectedBlog = blogsData.find(blog => blog._id === _id);

  console.log(selectedBlog); 
  return (
    <div>
      {selectedBlog?.description}
    </div>
  );
};

export default SingleBlogDetails;
