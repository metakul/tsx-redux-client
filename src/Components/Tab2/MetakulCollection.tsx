import { useDispatch, useSelector } from 'react-redux';
import { selectNftCollection } from '../../redux/slices/MetakulCollection/NftSlice';
import { AppDispatch } from '../../redux/store';
import { LoadNftSlice } from '../../redux/slices/MetakulCollection/NftApiSlice';
import { CollectionInfo } from '../../interfaces/interface';
import { Button } from '@mui/material';
import { BalanceItem } from '../../interfaces/interface';
import { ConnectWallet } from '@thirdweb-dev/react';
import NftCard from '../Card/NftCard';

const MetakulCollection = () => {
  const dispatch = useDispatch()

  const balance = useSelector(selectNftCollection).nfts as BalanceItem[]

  const svgStyle = {
    fill: '#5893f9', // Set your desired fill color here
    height: '1em',
  };
  const handleLoadNft = () => {
    const collectionInfo: CollectionInfo = {
      collectionAddress: "0x710E9161e8A768c0605335AB632361839f761374"
    };
    (dispatch as AppDispatch)(LoadNftSlice(collectionInfo));
  }

  const buyNft = (id: string | undefined) => {
    if (id) {
        const url = `https://opensea.io/assets/matic/0x710e9161e8a768c0605335ab632361839f761374/${id}`;
        window.open(url, '_blank'); 
        return true;
    } else {
        return false; 
    }
};

  return (
    <main className="pt-[1.5rem] lg:pt-6">
      {/* <div className="relative">
        <img src="img/collections/collection_banner.jpg" alt="banner" className="h-[18.75rem] object-cover" />
      </div> */}

        <div className="container flex justify-center">
          <div className="text-center ">
            <figure className="mb-4">

              <div
                className="bottom-0 flex items-center justify-center rounded-full border-2  p-4 pl-12 border-white  "
                data-tippy-content="Verified Collection"
              >
                <img
                  src="img/logo.png"
                  alt="collection avatar"
                  className=" rounded-xl border-[5px] border-white "
                  width="200"
                  height="200"
                />
                <div className='bg-green relative top-20 right-8'>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="44"
                    height="44"
                    className="h-[1.875rem] w-[1.875rem] fill-white border "
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </div>

              </div>
            </figure>
            <h2 className="mb-2 font-display text-4xl font-medium ">Metakul NFT Collection</h2>
            <div className="mb-2">
              <span className="text-sm font-bold text-jacarta-400">Created by </span>
              <a href="https://www.linkedin.com/in/shubham-kunwar-90ba441ba/" target="_balnk" className="text-sm font-bold text-accent">Kunwar.eth</a>
            </div>

            <div
              className="mb-8 inline-flex flex-wrap items-center justify-center rounded-xl border   "
            >
              <div
                className="w-1/2 rounded-l-xl border-r border-b  border-jacarta-100 py-4 hover:shadow-md  sm:w-24"
              >
                <div className="mb-1 text-base font-bold  ">777</div>
                <div className="text-2xs font-medium tracking-tight ">Items</div>
              </div>
              <div
                className="w-1/2 border-jacarta-100 py-4 hover:shadow-md border-b  sm:w-24 sm:border-r"
              >
                <div className="mb-1 text-base font-bold  ">32</div>
                <div className="text-2xs font-medium tracking-tight ">Owners</div>
              </div>
              <div
                className="w-1/2 border-r border-jacarta-100  py-4 hover:shadow-md  sm:w-32"
              >
                <div
                  className="mb-1 flex items-center justify-center text-base font-medium  "
                >
                  <span className="-mt-px inline-block" data-tippy-content="ETH">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      viewBox="0 0 1920 1920"

                      className="h-4 w-4"
                    >
                      <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                      <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                      <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                      <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                      <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                    </svg>
                  </span>
                  <span className="font-bold">0</span>
                </div>
                <div className="text-2xs font-medium tracking-tight ">Floor Price</div>
              </div>
              <div className="w-1/2 rounded-r-xl border-jacarta-100 py-4 hover:shadow-md sm:w-32"
              >
                <div
                  className="mb-1 flex items-center justify-center text-base font-medium  "
                >
                  <span className="-mt-px inline-block" data-tippy-content="ETH">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      viewBox="0 0 1920 1920"
                      className="h-4 w-4"
                    >
                      <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                      <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                      <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                      <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                      <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                    </svg>
                  </span>
                  <span className="font-bold">0 K</span>
                </div>
                <div className="text-2xs font-medium tracking-tight ">Volume Traded</div>
              </div>
            </div>

            <p className="mx-auto max-w-xl text-lg ">
              Unique NFT's built to unite the design multiverse. Designed and styled by Metakul.
              Join Discord to know about the free claiming of Metakul NFT
            </p>

            <div className="mt-2 flex items-center justify-center space-x-2.5">
              <a href="https://discord.gg/wMcv6HW6VJ" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <div
                  className="rounded-xl border border-jacarta-100     "
                >
                  <div className="js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={svgStyle}>
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                    </svg>
                  </div>

                </div>
              </a>
              <a href="https://www.instagram.com/metakul.nft" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div
                  className="rounded-xl border border-jacarta-100     "
                >
                  <div className="js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#df7358" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                  </div>

                </div>
              </a>
              <a href="https://twitter.com/metakul_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div
                  className="rounded-xl border border-jacarta-100     "
                >
                  <div className="js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#5590f7" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                  </div>

                </div>
              </a>

            </div>
            <ConnectWallet style={{
              marginTop: "20px"
            }} />
          </div>
        </div>


      <div className="">
        <ul
          className="nav nav-tabs mb-2 flex items-center justify-center border-b border-jacarta-100 "
          role="tablist"
        >

          <li className="nav-item" role="presentation">
            <button
              className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover: "
              id="activity-tab"
              data-bs-toggle="tab"
              data-bs-target="#activity"
              type="button"
              role="tab"
              aria-controls="activity"
              aria-selected="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="mr-1 h-5 w-5 fill-current"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z"
                />
              </svg>
              <span className="font-display text-base font-medium">All NFTs</span>
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="items" role="tabpanel" aria-labelledby="items-tab">
            <div className="mb-8 flex flex-wrap items-center justify-between">
              <div className="flex flex-wrap items-center">
                <div className="my-1 mr-2.5">
                  <button
                    className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100  px-4 font-display text-sm font-semibold  transition-colors hover:border-transparent      "
                    id="blockchainFilter"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mr-1 h-4 w-4 fill-jacarta-300 transition-colors group-hover:fill-white "
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 14v2h2v-2H4zM18 4v2h2V4h-2zm0 14v2h2v-2h-2z"
                      />
                    </svg>
                    <span>Metakul Collection</span>
                  </button>

                </div>

                <div className="my-1 mr-2.5">
                  <button
                    className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100  px-4 font-display text-sm font-semibold  transition-colors hover:border-transparent      "
                    id="categoriesFilter"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mr-1 h-4 w-4 fill-jacarta-300 transition-colors group-hover:fill-white "
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"
                      />
                    </svg>
                    <span>Web3</span>
                  </button>

                </div>
                <div className="my-1 mr-2.5">
                  <button
                    className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100  px-4 font-display text-sm font-semibold  transition-colors hover:border-transparent      "
                    id="saleTypeFilter"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mr-1 h-4 w-4 fill-jacarta-300 transition-colors group-hover:fill-white "
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM13 10V5l-5 7h3v5l5-7h-3z"
                      />
                    </svg>
                    <span>Polygon</span>
                  </button>

                </div>
                <div className="my-1 mr-2.5">
                  <button
                    className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100  px-4 font-display text-sm font-semibold  transition-colors hover:border-transparent      "
                    id="priceRangeFilter"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mr-1 h-4 w-4 fill-jacarta-300 transition-colors group-hover:fill-white "
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z"
                      />
                    </svg>
                    <span>Gasless</span>
                  </button>


                </div>
              </div>


            </div>

            <div className="grid grid-cols-2 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
              <NftCard balance={balance} loadingMessage='Loading Nfts From Metakul Colelction' handleNftButtonText={"Buy Now"} onHandleButtonClick={buyNft}/>

              <div className="block rounded-2.5xl border mt-4 border-jacarta-100 p-[1.1875rem] transition-shadow hover:shadow-lg  " >
                <figure className="relative">

                  <div
                    className="absolute top-3 right-3 flex items-center space-x-1 rounded-md  p-2 "
                  >
                    <span
                      className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                      data-tippy-content="Favorite"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-4 w-4 fill-jacarta-500 hover:fill-red  "
                      >
                        <path fill="none" d="M0 0H24V24H0z" />
                        <path
                          d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                        />
                      </svg>
                    </span>
                    <span className="text-sm "></span>
                  </div>
                </figure>
                <div className="mt-7 flex items-center justify-between">

                  <div className="dropup rounded-full  ">

                    <div className="mt-8 flex items-center justify-between">

                    
                        <Button  className="font-display text-sm font-semibold text-accent" onClick={handleLoadNft}>
                          Load More...
                        </Button>

                    </div>
                  </div>

                </div>
                <div className="mt-8 flex items-center justify-between">

                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#buyNowModal"
                  >
                  </button>

                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </main>
  );
};

export default MetakulCollection;
