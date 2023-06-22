import axios from "axios";

const useHttp = () => {
  const headers = { "Content-Type": "application/json" };

  const API_URL = process.env.REACT_APP_API_URL;

  const getRequest = async (url, method, params) => {
    try {
      const response = await axios(API_URL + url, {
        method,
        headers,
        params,
      });
      return response.data;
    } catch {
      return undefined;
    }
  };

  const putRequest = async (url, data) => {
    axios.put(API_URL + url, data, { headers });
  };

  return {
    getRequest,
    putRequest,
  };
};

export default useHttp;
