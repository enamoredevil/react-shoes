import axios from "axios";

const ShoesService = () => {
  const URL = process.env.REACT_APP_URL;

  const getAllShoes = async (gender) => {
    const response = await axios.get(URL, {
      params: { gender },
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  };

  return {
    getAllShoes,
  };
};

export default ShoesService;
