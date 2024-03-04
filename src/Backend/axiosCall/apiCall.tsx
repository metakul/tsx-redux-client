import axios from 'axios';
import { RequestOptions } from '../../interfaces/interface';

const request = async (options: RequestOptions) => {
  try {
    // Construct the full request URL, prepending the API endpoint if necessary
    const fullUrl = `${options.url}`;

    // Make the HTTP request using axios
    const response = await axios({
      method: options.method,
      url: fullUrl,
      data: JSON.stringify(options?.data),
    });

    // Return the parsed response data
    console.log(response.data); // Accessing response data
    return response;
  } catch (error) {
    // Handle errors gracefully, providing more informative messages if possible
    console.error(`API request error: ${error}`);
    throw error;
  }
};

export default request;
