// App.tsx

import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import store from "./redux/store"
import { Provider } from 'react-redux';
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
//theme
import { ColorModeContext, useMode } from './layout/Theme/themes';
import { Analytics } from '@vercel/analytics/react';
 
const smartWalletOptions = {
  factoryAddress: "0x2ace847964fe70d38ea6dad726e3a230dca244bd",
  gasless: true,
};

function App() {
  const [theme, colorMode] = useMode();
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThirdwebProvider
          activeChain="polygon"
          clientId="ed7a4b64885c72be1dc347066f4e51ce"
          supportedWallets={[
            smartWallet(metamaskWallet(), smartWalletOptions),
            smartWallet(coinbaseWallet({ recommended: true }), smartWalletOptions),
            smartWallet(walletConnect(), smartWalletOptions),
            smartWallet(localWallet(), smartWalletOptions),
            smartWallet(
              embeddedWallet({
                auth: {
                  options: ["email", "google", "apple", "facebook"],
                },
              }),
              smartWalletOptions
            ),
          ]}
        >
          <Provider store={store}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Provider>
        </ThirdwebProvider>
      </ThemeProvider>
      <Analytics />
    </ColorModeContext.Provider>

  );
}

export default App;
