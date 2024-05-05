import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectedCryptos } from "../../redux/slices/CryptoSlices/CryptoSlice";
import { fetchSingleCryptoDispatcher } from "../../redux/slices/CryptoSlices/CryptoApiSlice";
import { Box, Skeleton, Stack } from "@mui/material";

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
        <section className="overflow-hidden">
            <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 p-2">
                {cryptoData && cryptoData.map((crypto, index) => {
                    return (
                        <div key={index} className="ml-8 animate-marquee flex items-center"> {/* Added 'items-center' to align items vertically */}

                            <div className="flex items-center">
                                <img src={`/CryptoLogo/${crypto.cryptoData.cryptoSymbol}.png`} alt={crypto.cryptoData.cryptoSymbol} className="w-10 h-10 mb-2" />
                                <Box className='ml-2'>
                                    <div>{crypto.cryptoData.cryptoSymbol}</div>

                                    {crypto.loading ? (
                                        <Stack spacing={1}>
                                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                        </Stack>
                                    ) : (
                                        <div>${Number(crypto.cryptoData.price).toFixed(2)}</div>
                                    )}
                                </Box>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default MarqueeCryptoNew;
