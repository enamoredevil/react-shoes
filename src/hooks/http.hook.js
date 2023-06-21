import axios from "axios";

const useHttp = () => {
  const headers = { "Content-Type": "application/json" };

  const getRequest = async (url, method, params) => {
    try {
      const response = await axios(url, {
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
    axios.put(url, data, { headers });
  };

  return {
    getRequest,
    putRequest,
  };
};

export default useHttp;
