import { useEffect, useState } from "react";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectedCryptos } from "../../redux/slices/CryptoSlices/CryptoSlice"; // assuming you have an action to update crypto data
import { fetchSingleCryptoDispatcher } from "../../redux/slices/CryptoSlices/CryptoApiSlice";
import { CryptoInfo } from "../../redux/slices/CryptoSlices/CryptoSlice";

const MarqueeCryptoNew = () => {
    const cryptoData = useSelector(selectedCryptos);
    const dispatch = useDispatch();
    const [displayedCryptos, setDisplayedCryptos] = useState<CryptoInfo[]>([]);

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

    useEffect(() => {
        if (cryptoData.length > 0) {
            const marqueeData = [...cryptoData, ...cryptoData.slice(0, 4)];
            setDisplayedCryptos(marqueeData);
        }
    }, [cryptoData]);

    return (
        <section className="overflow-hidden ">
         
            <div className="">
                <div
                    className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100  p-2"
                >
                    {displayedCryptos && displayedCryptos.map((crypto, index) => (
                        <div key={index} className="ml-12 flex animate-marquee space-x-8 ">
                            <img src={`/CryptoLogo/${crypto.cryptoData.cryptoSymbol}.png`}  alt={crypto.cryptoData.cryptoSymbol} className="w-10 h-10" />
                            <div className="">
                                <div >{crypto.cryptoData.cryptoSymbol}</div>
                                <div >${crypto.cryptoData.price.toFixed(2)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarqueeCryptoNew;
