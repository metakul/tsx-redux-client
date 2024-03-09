// Tab1.jsx

import { Box } from '@mui/material';
import Blogs from './Blogs';
import Marquee from '../MarqueCrypto';
const Tab1 = () => {


  return (
    <>
      <Marquee />
      <Box className='md:container md:mx-auto'>
        <Blogs />
      </Box>
    </>
  );
};

export default Tab1;
