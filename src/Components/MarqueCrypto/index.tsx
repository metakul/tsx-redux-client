import React, { useEffect } from 'react';
import '../../@customType/typings.d.ts';
import './custom-marquee.css'; // Import the custom CSS file

const Marquee = () => {
  useEffect(() => {
    // Dynamically create and load the CoinGecko script
    const script = document.createElement('script');
    script.src = 'https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <coingecko-coin-price-marquee-widget
      coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
      currency="usd"
      locale="en"
    ></coingecko-coin-price-marquee-widget>
  );
};

export default Marquee;
