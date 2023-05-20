import React from "react";

import axios from "axios";

const ShoesService = () => {
  const URL = process.env.REACT_APP_URL;

  const [status, setStatus] = React.useState("waiting");

  const headers = { "Content-Type": "application/json" };

  const getAllShoes = async (gender) => {
    setStatus("loading");
    try {
      const response = await axios.get(URL, {
        params: { gender },
        headers,
      });
      return response.data;
    } catch {
      return undefined;
    }
  };

  const getSingleShoe = async (id) => {
    setStatus("loading");
    try {
      const response = await axios.get(URL + `/${id}`, {
        headers,
      });
      return response.data;
    } catch {
      return undefined;
    }
  };

  const getFavoriteShoes = async () => {
    setStatus("loading");
    try {
      const response = await axios.get(URL, {
        params: { isFavorite: "true" },
        headers,
      });
      return response.data;
    } catch {
      return undefined;
    }
  };

  const toggleFavoriteShoe = async (id, state) => {
    // I think I'm supposed to use "patch" here instead of "put", but this mock API doesn't support it
    await axios.put(
      URL + `/${id}`,
      { isFavorite: state },
      {
        headers,
      }
    );
  };

  return {
    getAllShoes,
    getSingleShoe,
    getFavoriteShoes,
    toggleFavoriteShoe,
    status,
    setStatus,
  };
};

export default ShoesService;
