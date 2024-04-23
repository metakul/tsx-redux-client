import React from "react"
import DexCard from "../Card/DexCard"
import { DexItem } from "../../interfaces/interface";


function Dexui() {
    const ExchangeNow=()=>{

    }
    const balance: DexItem[] = [
        {
          metadata: {
            name: "ETH",
            id: "1"
          }
        },
        {
          metadata: {
            name: "SOL",
            id: "2"
          }
        },
      ];
  return (
    <React.Fragment>
          <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-1 lg:grid-cols-2 mt-4">
              <DexCard balance={balance} loadingMessage='Loading Nfts From Metakul Colelction' handleBuyCryptoText={"Buy Now"} onHandleButtonClick={ExchangeNow}/>
    </div>
    </React.Fragment>
  )
}

Dexui.propTypes = {}

export default Dexui
