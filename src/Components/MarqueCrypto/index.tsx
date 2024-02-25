// MarqueeCrypto.jsx

import { Box } from '@radix-ui/themes';
import './custom-marquee.css'; 
import { cryptoData } from './mockData';

const MarqueeCrypto = () => {
  return (
    <Box>
    <div className="mb-8 flex animate-marquee space-x-8">
      {cryptoData.map((crypto, index) => (
        <div key={index} className="flex animate-marquee space-x-8">
          <img src={crypto.icon} alt={crypto.title} className="crypto-icon" />
          <div className="crypto-info">
            <div className="crypto-title">{crypto.title}</div>
            <div className="crypto-price">{crypto.price}</div>
          </div>
        </div>
      ))}
    </div>
      </Box>
  );
};

export default MarqueeCrypto;
