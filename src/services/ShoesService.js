import useHttp from "../hooks/http.hook";

const ShoesService = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const { getRequest, putRequest } = useHttp();

  const getAllShoes = async (gender) => {
    return await getRequest(BASE_URL + "/sneakers", "get", { gender });
  };

  const getSingleShoe = async (id) => {
    return await getRequest(BASE_URL + `/sneakers/${id}`, "get");
  };

  const getFavoriteShoes = async () => {
    return await getRequest(BASE_URL + "/sneakers", "get", {
      isFavorite: "true",
    });
  };

  const toggleFavoriteShoe = (id, state) => {
    putRequest(BASE_URL + `/sneakers/${id}`, { isFavorite: state });
  };

  const getCartShoes = async () => {
    return await getRequest(BASE_URL + "/sneakers", "get", { isCart: "true" });
  };

  const toggleCartShoe = (id, state) => {
    putRequest(BASE_URL + `/sneakers/${id}`, { isCart: state });
  };

  return {
    getAllShoes,
    getSingleShoe,
    getFavoriteShoes,
    toggleFavoriteShoe,
    getCartShoes,
    toggleCartShoe,
  };
};

export default ShoesService;
