
import { cryptoData } from "./mockData";
const MarqueeCryptoNew = () => {
    return (
        <section className="overflow-hidden bg-blue-500">
            <div className="container">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="mb-1 text-center font-display text-3xl font-medium ">
                        Crypto Prices
                    </h2>
                </div>
            </div>
            <div className="">
                <div
                    className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100  p-6"
                >
                    {cryptoData.map((crypto, index) => (
                        <div key={index} className="ml-6 flex animate-marquee space-x-8 ">
                            <img src={crypto.icon} alt={crypto.title} className="crypto-icon" />
                            <div className="crypto-info">
                                <div className="crypto-title">{crypto.title}</div>
                                <div className="crypto-price">{crypto.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default MarqueeCryptoNew;
