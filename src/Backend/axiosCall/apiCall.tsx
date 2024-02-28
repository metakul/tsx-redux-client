import axios, {  AxiosResponse } from 'axios';
import { RequestOptions } from '../../interfaces/interface';

const apiEndpoint = import.meta.env.VITE_BACKEND_AUTH_IP;

const request = async (options: RequestOptions) => {
  try {
    // Serialize data before sending
    if (options.data && typeof options.data !== 'string') {
      options.data = JSON.stringify(options.data);
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
      };
    }

    // Construct the full request URL, prepending the API endpoint if necessary
    const fullUrl = options.url.startsWith('https://') || options.url.startsWith('http://')
      ? options.url
      : `${apiEndpoint}${options.url}`;

    // Make the HTTP request using axios
    const response: AxiosResponse = await axios({
      ...options,
      url: fullUrl,
    });

    // Return the parsed response data
    console.log(response)
    return response;
  } catch (error) {
    // Handle errors gracefully, providing more informative messages if possible
    console.error(`API request error: ${error}`);
    throw error;
  }
};

export default request;
