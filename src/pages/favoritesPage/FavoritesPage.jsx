import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchFavoriteShoes,
  favoritesShoesSelector,
} from "../../redux/slices/favoriteShoesSlice";

import { Helmet } from "react-helmet";

import FavoritesTop from "../../components/favoritesPageComponents/favoritesTop/FavoritesTop";

import { setFavoritesShoeContent } from "../../utils/setContentFunctions";

import { motion } from "framer-motion";
import { animatedPagesVariants } from "../../utils/framerMotion";

import "./favoritesPage.scss";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { favoriteShoes, status } = useSelector(favoritesShoesSelector);

  const content = setFavoritesShoeContent(status, favoriteShoes);

  React.useEffect(() => {
    dispatch(fetchFavoriteShoes());
  }, []);

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
