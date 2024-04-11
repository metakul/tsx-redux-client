import axios from 'axios';
import { RequestOptions } from '../../interfaces/interface';
import toast from 'react-hot-toast';

const request = async (options: RequestOptions) => {
  let toastId
  if (options.loadingMessage) {
    toastId = toast.loading(options.loadingMessage as string, { duration: 8000 }); // Corrected this line
  }
  try {
    // Construct the full request URL, prepending the API endpoint if necessary
    const fullUrl = `${options.url}`;

    // Make the HTTP request using axios
    const response = await axios({
      method: options.method,
      url: fullUrl,
      data: options?.data,
      headers: options?.headers
    });

    if (toastId) {
      toast.success(response.data.message, { id: toastId });

    }

    // Return the parsed response data
    console.log(response); // Accessing response data
    return response;
  } catch (error) {
    if (toastId) {

      toast.error("OHO. ERROR, RELOAAAD.", { id: toastId });
    }
    // Handle errors gracefully, providing more informative messages if possible
    console.error(`API request error: ${error}`);
    throw error;
  }
};

export default request;
