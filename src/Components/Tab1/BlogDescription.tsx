import React from 'react';
import { useSelector } from 'react-redux';
import { BlogDetailsProps } from '../../interfaces/interface';
import { selectedBlogs } from '../../redux/slices/Blogs/BlogSlice';

const BlogDescription: React.FC<BlogDetailsProps> = ({ _id }) => {
  const blogsData = useSelector(selectedBlogs).blogs

  const selectedBlog = blogsData.find(blog => blog._id === _id);

  return (
    <div>
      {selectedBlog && (
        <div dangerouslySetInnerHTML={{ __html: selectedBlog.description || '' }} />
      )}
    </div>
  );
};

export default BlogDescription;
