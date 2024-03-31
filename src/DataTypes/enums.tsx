import { RequestOptions } from "../interfaces/interface";
// enums.ts
export enum UserType {
  ADMIN = 'admin',
  USER = 'user',
  RANDOM = 'random',
}

export enum Tabs {
  tabTitle1="Home",
  tabTitle2="BTC",
  tabTitle3="Wallet",
  tabTitle4="PROFILE"
}
export enum Pages {
  HOME = '/',
  DASHBOARD = '/dashboard/app',
  MINT = '/mint',
  CAREER='/Career'
}

export enum HomePageInfo{
  pageTitle="HomePage",
  pageDescription="This is home page",
  
}
export enum ProtectedPageInfo{
  pageTitle="Dashboard",
  pageDescription="This is Protected page",
}

// define endpoints here
  export const ApiEndpoint: Record<string, RequestOptions> = {
    LOGIN: { url: 'https://smart-wallet-us83.onrender.com/auth/user/login', method: 'POST', headers: { 'Content-Type': 'application/json'},loadingMessage:"Logging In"},
    GETBLOG: { url: 'https://blog-app-1-7mgt.onrender.com/post', method: 'GET', headers: { 'Content-Type': 'application/json'},loadingMessage:"Loading Blogs"},
    ADD_BLOG: { url: 'https://blog-app-1-7mgt.onrender.com/post', method: 'POST', headers: { 'Content-Type': 'application/json'},loadingMessage:"Adding New Blog"},
    FetchCryptoInfo: { url: "https://rest.coinapi.io/v1/exchangerate", method: 'GET', headers: { "X-CoinAPI-Key":"21F0E4E9-1955-4555-A4DA-51524A1E8ED3"}, loadingMessage:"Loading Crypto"},
  };
  

  