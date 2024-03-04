// Tab1.jsx

import { Box } from '@radix-ui/themes';
import Blogs from './Blogs';
import Marquee from '../MarqueCrypto';
import AddBlogForm from '../Forms/AddBlogForm';
const Tab1 = () => {

  const handleAddBlog = (data: unknown) => {
    console.log(data)
  };

  return (
    <>
      <Marquee />
      <Box className='md:container md:mx-auto'>
        <Blogs />
        <AddBlogForm onFormSubmit={handleAddBlog} />
      </Box>
    </>
  );
};

export default Tab1;
