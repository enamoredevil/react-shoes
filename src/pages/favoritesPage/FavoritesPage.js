import React from "react";

import { Helmet } from "react-helmet";

import FavoritesTop from "../../components/favoritesPageComponents/favoritesTop/FavoritesTop";

import ShoesService from "../../services/ShoesService";

import { setFavoritesShoeContent } from "../../utils/setContentFunctions";

import { motion } from "framer-motion";
import { animatedPagesVariants } from "../../utils/framerMotion";

import "./favoritesPage.scss";

const FavoritesPage = () => {
  const [favShoes, setFavShoes] = React.useState([]);

  const { getFavoriteShoes, toggleFavoriteShoe, status, setStatus } =
    ShoesService();

  React.useEffect(() => {
    window.scrollTo(0, 0);
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
    toggleFavoriteShoe(id, state);
  };

  const content = setFavoritesShoeContent(status, favShoes, onShoeDelete);

  return (
    <motion.section
      variants={animatedPagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="favorites"
    >
      <Helmet>
        <title>Shoes - Favorites</title>
        <meta name="description" content="Shoes Favorites Page" />
      </Helmet>
      <div className="favorites__container container">
        <FavoritesTop />
        {content}
      </div>
    </motion.section>
  );
};

export default FavoritesPage;
