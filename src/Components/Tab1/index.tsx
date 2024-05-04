// Tab1.jsx

import Blogs from './Blogs';
import Marquee from '../MarqueCrypto';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
        <div>Loading...</div>
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
