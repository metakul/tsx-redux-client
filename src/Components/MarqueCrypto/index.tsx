import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectedCryptos } from "../../redux/slices/CryptoSlices/CryptoSlice"; // assuming you have an action to update crypto data
import { fetchSingleCryptoDispatcher } from "../../redux/slices/CryptoSlices/CryptoApiSlice";
import { Link } from "react-router-dom";

const MarqueeCryptoNew = () => {
    const cryptoData = useSelector(selectedCryptos);
    const dispatch = useDispatch();
 
    const fetchCryptoInfo = async (_id: string, cryptoSymbol: string) => {
        try {
            (dispatch as AppDispatch)(fetchSingleCryptoDispatcher({ _id, cryptoSymbol, currency: "USD" }));
        } catch (error) {
            console.error('Error fetching crypto info:', error);
        }
    };
    useEffect(() => {
        fetchCryptoInfo("BTC", "BTC");
        fetchCryptoInfo("ETH", "ETH");
        fetchCryptoInfo("XRP", "XRP");
        fetchCryptoInfo("SOL", "SOL");
        fetchCryptoInfo("ADA", "ADA");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="overflow-hidden ">
            <div className="">
                <div className="mx-auto max-w-xl text-center">
                    <h3 className="mb-4 text-center font-display text-xl font-medium ">
                        METAKUL - <Link target="_blank" className="text-blue" to="https://www.erc4337.io/">
                            Member of the 4337 Revolution
                        </Link>
                    </h3>
                </div>
            </div>
            <div className="">
                <div
                    className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100  p-2"
                >
                    {cryptoData && cryptoData.map((crypto, index) => (
                        <div key={index} className="ml-6 flex animate-marquee space-x-8 ">
                            <img src={`/CryptoLogo/${crypto.cryptoData.cryptoSymbol}.png`}  alt={crypto.cryptoData.cryptoSymbol} className="w-10 h-10" />
                            <div className="">
                                <div className="crypto-title">{crypto.cryptoData.cryptoSymbol}</div>
                                <div className="crypto-price">${crypto.cryptoData.price.toFixed(2)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarqueeCryptoNew;
