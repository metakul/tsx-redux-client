import axios from 'axios';
import Cookies from 'js-cookie';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { Navigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_BACKEND_URL;
const authBaseURL = process.env.REACT_APP_AUTH_URL;

export const api = axios.create({
  baseURL: baseURL,
});

export const authApi = axios.create({
  baseURL: authBaseURL,
});

// Function to set access token in a secure HTTP-only cookie
export const setAccessTokenInCookie = (accessToken:JwtPayload) => {
  if (accessToken) {
    Cookies.set('accessToken', accessToken);
  } else {
    console.error("No access Token received while saving to cookie.");
    // You may throw an error here or handle it as needed
  }
};

// Function to retrieve access token from cookies
export const getAccessTokenFromCookie = async () => {
  let accessToken = Cookies.get('accessToken');

  if (accessToken) {
    // Check if the token is still valid
    const decodedToken = jwtDecode<JwtPayload>(accessToken);
    const currentTime = Date.now() / 1000; // Convert to seconds

    if (decodedToken.exp && decodedToken.exp < currentTime) {
      console.log("accessToken is expired. Refreshing accessToken")
      const newAccessToken=await refreshAccessToken()
      accessToken=newAccessToken;
      setAccessTokenInCookie(accessToken);
      console.log("new access Token set")
    } else {
      setAccessTokenInCookie(accessToken);
      console.log("Access token is not expired");
    }
  } else {
    console.error("No accessToken found in cookies");
    // You may throw an error here or handle it as needed
  }

  // try {
  //   const response = await api.get("/isAuthenticated");
  //   // If the access token is valid, continue with the request
  //   return accessToken;
  // } catch (error) {
  //   // Handle errors and token refresh as before
  // }

  const updatedToken= Cookies.get('accessToken');
  return updatedToken
};

// Function to set refresh token in a secure HTTP-only cookie
export const setRefreshTokenInCookie = (refreshToken:JwtPayload) => {
  if (refreshToken) {
  Cookies.set('refreshToken', refreshToken);

  console.log(Cookies.get('refreshToken'),"getAccessTokenFromCookie")
} else {
  console.error("No access Token received while saving to cookie.");
}
};

// Function to retrieve refresh token from cookies
const getRefreshTokenFromCookie = () => {
  return Cookies.get('refreshToken');
};

// Function to remove access token and refresh token from cookies
export const removeTokensFromCookies = () => {
  Cookies.remove('accessToken', { path: '/' });
  Cookies.remove('refreshToken', { path: '/' });
};

// Function to refresh access token
const refreshAccessToken = async () => {
  try {
    // Retrieve the refreshToken from cookie
    const refreshToken = getRefreshTokenFromCookie();

    if (!refreshToken) {
      console.error('No refreshToken found in cookies.');
      // You may throw an error here or handle it as needed
      return null;
    }
    // Send a request to your backend to refresh the access token
    const response = await authApi.post('/token/refresh', { refresh:refreshToken });
    console.log("token refresh response",response)

    if (response.data.access) {
      // Update the access token in the cookie
      setAccessTokenInCookie(response.data.access);
    }
    else{
      console.log(response)
      return <Navigate to="/" />;
    }

    return response.data.accessToken;
  } catch (error) {
    console.error('Error while refreshing accessToken:', error);
    // You may throw an error here or handle it as needed
    throw error;
  }
};

