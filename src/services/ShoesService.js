import useHttp from "../hooks/http.hook";

const ShoesService = () => {
  const { getRequest, putRequest } = useHttp();

  const getAllShoes = async (gender) => {
    return await getRequest("/sneakers", "get", { gender });
  };

  const getSingleShoe = async (id) => {
    return await getRequest(`/sneakers/${id}`, "get");
  };

  const getFavoriteShoes = async () => {
    return await getRequest("/sneakers", "get", {
      isFavorite: "true",
    });
  };

  const toggleFavoriteShoe = (id, state) => {
    putRequest(`/sneakers/${id}`, { isFavorite: state });
  };

  const getCartShoes = async () => {
    return await getRequest("/sneakers", "get", { isCart: "true" });
  };

  const toggleCartShoe = (id, state) => {
    putRequest(`/sneakers/${id}`, { isCart: state });
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
