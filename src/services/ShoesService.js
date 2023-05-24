import useHttp from "../hooks/http.hook";

const ShoesService = () => {
  const SHOES_URL = process.env.REACT_APP_SHOES_URL;
  const ORDERS_URL = process.env.REACT_APP_ORDERS_URL;

  const { getRequest, putRequest, postRequest, status, setStatus } = useHttp();

  const getAllShoes = async (gender) => {
    return await getRequest(SHOES_URL, "get", { gender });
  };

  const getSingleShoe = async (id) => {
    return await getRequest(SHOES_URL + `/${id}`, "get");
  };

  const getFavoriteShoes = async () => {
    return await getRequest(SHOES_URL, "get", { isFavorite: "true" });
  };

  const toggleFavoriteShoe = (id, state) => {
    putRequest(SHOES_URL + `/${id}`, { isFavorite: state });
  };

  const getCartShoes = async () => {
    return await getRequest(SHOES_URL, "get", { isCart: "true" });
  };

  const toggleCartShoe = (id, state) => {
    putRequest(SHOES_URL + `/${id}`, { isCart: state });
  };

  const postOrderData = (data) => {
    postRequest(ORDERS_URL, data);
  };

  const getOrders = async () => {
    return await getRequest(ORDERS_URL, "get");
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
