import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.REACT_APP_BACKEND_URL;
const authBaseURL = process.env.REACT_APP_AUTH_URL;

export const api = axios.create({
  baseURL: baseURL,
});

export const authApi = axios.create({
  baseURL: authBaseURL,
});

// Function to set access token in a secure HTTP-only cookie
export const setAccessTokenInCookie = (accessToken: string | undefined) => {
  if (accessToken) {
    Cookies.set('accessToken', accessToken);
  } else {
    console.error("No access Token received while saving to cookie.");
    // You may throw an error here or handle it as needed
  }
};

// Function to retrieve access token from cookies
export const getAccessTokenFromCookie = async () => {
  const accessToken = Cookies.get('accessToken');

  return accessToken
};

// Function to set refresh token in a secure HTTP-only cookie
export const setRefreshTokenInCookie = (refreshToken:string) => {
  if (refreshToken) {
  Cookies.set('refreshToken', refreshToken);

  console.log(Cookies.get('refreshToken'),"getAccessTokenFromCookie")
} else {
  console.error("No access Token received while saving to cookie.");
}
};



// Function to remove access token and refresh token from cookies
export const removeTokensFromCookies = () => {
  Cookies.remove('accessToken', { path: '/' });
  Cookies.remove('refreshToken', { path: '/' });
};



