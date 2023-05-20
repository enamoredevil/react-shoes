import React from "react";

import FavoritesTop from "../../components/favoritesTop/FavoritesTop";

import ShoesService from "../../services/ShoesService";

import { setFavoritesShoeContent } from "../../utils/setContentFunctions";

import "./favoritesPage.scss";


const FavoritesPage = () => {
  const [favShoes, setFavShoes] = React.useState([]);

  const { getFavoriteShoes, toggleFavoriteShoe, status, setStatus } = ShoesService();

  React.useEffect(() => {
    async function fetchData() {
      const response = await getFavoriteShoes();
      if (!response) {
        setStatus("error");
      } else {
        setFavShoes(response);
        setStatus("confirmed");
      }
    }
    fetchData();
  }, []);

  const onShoeDelete = async (id, state) => {
    setFavShoes((favShoes) => favShoes.filter((favShoe) => favShoe.id !== id));
    await toggleFavoriteShoe(id, state);
  };

  const content = setFavoritesShoeContent(status, favShoes, onShoeDelete);

  return (
    <section className="favorites">
      <div className="favorites__container container">
        <FavoritesTop />
        {content}
      </div>
    </section>
  );
};

export default FavoritesPage;
