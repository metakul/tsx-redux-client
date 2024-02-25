// Tab1.jsx

import { Box } from '@radix-ui/themes';
import Blogs from './Blogs';
// import Marquee from '../MarqueCrypto';
const Tab1 = () => {
  return (
    <Box className="overflow-hidden w-full p-4">
        {/* <section className="overflow-hidden w-full p-4">
        <Marquee/>
        </section> */}
        <Blogs />
    </Box>
        
  );
};

export default Tab1;
