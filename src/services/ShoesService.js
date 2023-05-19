import React from "react";

import axios from "axios";

const ShoesService = () => {
  const URL = process.env.REACT_APP_URL;

  const [status, setStatus] = React.useState("waiting");

  const getAllShoes = async (gender) => {
    setStatus("loading");
    try {
      const response = await axios.get(URL, {
        params: { gender },
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch {
      return undefined;
    }
  };

  return {
    getAllShoes,
    status,
    setStatus,
  };
};

export default ShoesService;
