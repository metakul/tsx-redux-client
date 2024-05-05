// Tab1.jsx

import Blogs from './Blogs';
import Marquee from '../MarqueCrypto';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Skeleton, Stack } from '@mui/material';
const Tab1 = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate page loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <h3 className="mb-4 text-center font-display text-xl font-medium ">
        METAKUL - <Link target="_blank" className="text-blue" to="https://www.erc4337.io/">
          Member of the 4337 Revolution
        </Link>
      </h3>
      {isLoading ? (
            <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
      ) : (
        <>
          <Marquee />
          <Blogs />
        </>
      )}
    </>
  );
};

export default Tab1;
