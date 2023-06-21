import React from "react";
import { useDispatch } from "react-redux";
import { removeFavoriteShoe } from "../../../redux/slices/favoriteShoesSlice";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { animatedFavoritesItemVariants } from "../../../utils/framerMotion";

import "./favoritesItem.scss";

const FavoritesItem = ({ shoe }) => {
  const { title, price, images, gender, id } = shoe;

  const dispatch = useDispatch();

  const onRemoveFavoriteShoe = () => {
    dispatch(removeFavoriteShoe({ id }));
  };

  return (
    <motion.div
      layout
      variants={animatedFavoritesItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="favorites__item"
    >
      <div className="favorites__item-image">
        <img src={images[0]} alt={title} />
      </div>
      <h4>{title}</h4>
      <span>{price}</span>
      <div className="favorites__item-buttons">
        <Link
          className="favorites__item-link"
          to={`/${gender.toLowerCase()}/shoes/${id}`}
        >
          Read More
        </Link>

        <button
          onClick={onRemoveFavoriteShoe}
          className="favorites__item-delete"
        >
          Remove
        </button>
      </div>
    </motion.div>
  );
};

export default FavoritesItem;
