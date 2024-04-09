import React from 'react';

import { BalanceItem } from '../../interfaces/interface';
import { Button, Grid } from '@mui/material';

interface Props {
  balance: BalanceItem[];
  loadingMessage: string;
  handleNftButtonText: string;
  onHandleButtonClick: (id: string) => void;
}

const NftCard: React.FC<Props> = ({ loadingMessage, balance, handleNftButtonText, onHandleButtonClick }) => {
  return (
    <>
<Grid container>

      {balance && balance.length > 0 ? (
        balance.map((item: BalanceItem, index: number) => (
          <Grid item xs={6}>
          <article key={index}>
            <div className="block ml-2 rounded-2.5xl border border-jacarta-100 p-[1.1875rem] transition-shadow hover:shadow-lg max-w-80">
              <figure className="relative">
                <a href={item?.metadata?.name}>
                  <img
                    src={item?.metadata?.image}
                    alt={`item ${index + 1}`}
                    className="w-full rounded-[0.625rem]"
                    loading="lazy"
                  />
                </a>
                <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md  p-2">
                  <span
                    className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                    data-tippy-content="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-4 w-4 fill-jacarta-500 hover:fill-red"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path
                        d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm"></span>
                </div>
              </figure>
              <div className="mt-7 flex items-center justify-between">
                <a href={item?.metadata?.name}>
                  <span className="font-display text-base hover:text-accent">
                    {item?.metadata?.name}
                  </span>
                </a>
                <div className="dropup rounded-full">
                  <a
                    className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                    id={`itemActions${index}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-jacarta-500"
                    >
                      <circle cx="2" cy="2" r="2" />
                      <circle cx="8" cy="2" r="2" />
                      <circle cx="14" cy="2" r="2" />
                    </svg>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl py-4 px-2 text-left shadow-xl"
                    aria-labelledby={`itemActions${index}`}
                  >
                    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors">
                      New bid
                    </button>
                    <hr className="my-2 mx-4 h-px border-0" />
                    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors">
                      Refresh Metadata
                    </button>
                    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors">
                      Share
                    </button>
                    <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between">

                {item && item?.metadata?.id ? (
                  <>
                    <Button onClick={() => item && item.metadata && onHandleButtonClick(item.metadata.id)}>
                      {handleNftButtonText}
                    </Button>
                  </>
                ) : (
                  <h3>Not Minted Yet</h3>
                )}
              </div>
            </div>
          </article>
    </Grid>

        ))
      ) : (
        <div className="flex flex-row">
          <button className="dropdown-toggle m-4 p-4 group group flex items-center rounded-lg border border-jacarta-100 font-display text-lg font-semibold transition-colors hover:border-transparent">
            <span>{loadingMessage}</span>
          </button>
        </div>
      )}
</Grid>

    </>
  );
};

export default NftCard;
