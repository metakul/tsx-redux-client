// Tab1.jsx

import Blogs from './Blogs';
import Marquee from '../MarqueCrypto';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Tab1 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  }, []);

  return (
    <>
      <div className="">
        {isLoading ? (
          <div>Loading...</div> 
        ) : (
          <div className="">
            <h3 className="mb-4 text-center font-display text-xl font-medium ">
              METAKUL - <Link target="_blank" className="text-blue" to="https://www.erc4337.io/">
                Member of the 4337 Revolution
              </Link>
            </h3>
            <Marquee />
            <Blogs />
          </div>
        )}
          </div>
      </>
      );
};

      export default Tab1;
