import React from "react";

import axios from "axios";

const ShoesService = () => {
  const SHOES_URL = process.env.REACT_APP_SHOES_URL;
  const ORDERS_URL = process.env.REACT_APP_ORDERS_URL;

  const [status, setStatus] = React.useState("waiting");

  const headers = { "Content-Type": "application/json" };

  const getAllShoes = async (gender) => {
    setStatus("loading");
    try {
      const response = await axios.get(SHOES_URL, {
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
      const response = await axios.get(SHOES_URL + `/${id}`, {
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
      const response = await axios.get(SHOES_URL, {
        params: { isFavorite: "true" },
        headers,
      });
      return response.data;
    } catch {
      return undefined;
    }
  };

  const toggleFavoriteShoe = (id, state) => {
    // I think I'm supposed to use "patch" here instead of "put", but this mock API doesn't support it
    axios.put(
      SHOES_URL + `/${id}`,
      { isFavorite: state },
      {
        headers,
      }
    );
  };

  const getCartShoes = async () => {
    setStatus("loading");
    try {
      const response = await axios.get(SHOES_URL, {
        params: { isCart: "true" },
        headers,
      });
      return response.data;
    } catch {
      return undefined;
    }
  };

  const toggleCartShoe = (id, action) => {
    // I think I'm supposed to use "patch" here instead of "put", but this mock API doesn't support it
    axios.put(
      SHOES_URL + `/${id}`,
      { isCart: action },
      {
        headers,
      }
    );
  };

  const postOrderData = (data) => {
    axios.post(ORDERS_URL, data, { headers });
  };

  const getOrders = async () => {
    setStatus("loading");
    try {
      const response = await axios.get(ORDERS_URL, {
        headers,
      });
      return response.data;
    } catch {
      return undefined;
    }
  };

  return {
    getAllShoes,
    getSingleShoe,
    getFavoriteShoes,
    toggleFavoriteShoe,
    getCartShoes,
    toggleCartShoe,
    postOrderData,
    getOrders,
    status,
    setStatus,
  };
};

export default ShoesService;
