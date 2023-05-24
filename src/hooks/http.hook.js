import React from "react";

import axios from "axios";

const useHttp = () => {
  const [status, setStatus] = React.useState("waiting");

  const headers = { "Content-Type": "application/json" };

  const getRequest = React.useCallback(async (url, method, params) => {
    setStatus("loading");
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
  }, []);

  const putRequest = React.useCallback(async (url, data) => {
    axios.put(url, data, { headers });
  }, []);

  const postRequest = React.useCallback(async (url, data) => {
    axios.post(url, data, { headers });
  }, []);

  return {
    getRequest,
    putRequest,
    postRequest,
    status,
    setStatus,
  };
};

export default useHttp;
