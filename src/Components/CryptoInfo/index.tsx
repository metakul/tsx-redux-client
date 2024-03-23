import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CryptoInfoProps } from '../../interfaces/interface';
import { AppDispatch } from '../../redux/store';
import { fetchCryptoDispatcher } from './../../redux/slices/Blogs/CryptoData/CryptoInfoApiSlice';
import BasicExampleDataGrid from './CryptoBox';

const CryptoInfoPage: React.FC<CryptoInfoProps> = ({ cryptoSymbol }) => {
  const dispatch = useDispatch(); // Explicitly type dispatch

  const fetchCryptoInfo = async () => {
    try {
      // Dispatch the action to fetch crypto info
      await (dispatch as AppDispatch)(fetchCryptoDispatcher({ cryptoSymbol }));
    } catch (error) {
      console.error('Error fetching crypto info:', error);
    }
  };

  useEffect(() => {
    // Fetch crypto info when the component mounts
    fetchCryptoInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <div>
      <BasicExampleDataGrid/>
    </div>
  );
};

export default CryptoInfoPage;
