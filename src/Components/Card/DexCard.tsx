import React from 'react';
import {  DexItem } from '../../interfaces/interface';
import { Button, Typography } from '@mui/material';

interface Props {
  balance: DexItem[];
  loadingMessage: string;
  handleBuyCryptoText: string;
  onHandleButtonClick: (id: string) => void;
}

const DexCard: React.FC<Props> = ({ loadingMessage, balance, handleBuyCryptoText, onHandleButtonClick }) => {


  return (
    <>
      {balance && balance.length > 0 ? (
        balance.map((item: DexItem, index: number) => (
          <article key={index}>
            <div className="block ml-2 rounded-2.5xl border border-jacarta-100 p-[1\5rem] transition-shadow hover:shadow-lg ">
             
              <div className="mt-4 ml-4 flex items-center justify-around">
                  <span className="font-display text-base hover:text-accent">{item?.metadata?.name}</span>
             
                  <Button onClick={() => item && item.metadata && onHandleButtonClick(item.metadata.id)}>{handleBuyCryptoText}</Button>
              </div>
              <div className="mt-8 flex items-center justify-between ml-4">
              </div>
            </div>
          </article>
        ))
      ) : (
        <div>
          <Typography variant='h3' className='w-[100%]'>{loadingMessage}</Typography>
        </div>

      )}
    </>
  );
};

export default DexCard;
