import React from "react";

import ShoesService from "../../../services/ShoesService";

import { motion, AnimatePresence } from "framer-motion";
import { singleShoeInfoVariants } from "../../../utils/framerMotion";

import SingleShoeInfoPopUp from "../../singleShoeInfoPopUp/SingleShoeInfoPopUp";

import "./singleShoeInfo.scss";

const SingleShoeInfo = ({ shoe }) => {
  const [favoriteButtonState, setFavoriteButtonState] = React.useState(false);
  const [cartButtonState, setCartButtonState] = React.useState(false);
  const [isFavoritePopUpVisible, setIsFavoritePopUpVisible] =
    React.useState(false);
  const [isCartPopUpVisible, setIsCartPopUpVisible] = React.useState(false);

  const { toggleFavoriteShoe, toggleCartShoe } = ShoesService();

  const {
    title,
    colorWay,
    price,
    description,
    gender,
    material,
    style,
    manufacturer,
    isFavorite,
    isCart,
    id,
  } = shoe;

  React.useEffect(() => {
    setFavoriteButtonState(isFavorite === "false" ? false : true);
    setCartButtonState(isCart === "false" ? false : true);
  }, [isFavorite, isCart]);

  const onAddFavoriteClick = () => {
    setIsFavoritePopUpVisible(true);
    setFavoriteButtonState(true);
    toggleFavoriteShoe(id, "true");
  };

  const onAddCartClick = () => {
    setIsCartPopUpVisible(true);
    setCartButtonState(true);
    toggleCartShoe(id, "true");
  };

  return (
    <motion.div
      transition={{ staggerChildren: 0.3 }}
      initial="hidden"
      animate="visible"
      className="single-shoe__info"
    >
      <motion.h1
        variants={singleShoeInfoVariants}
        className="single-shoe__title"
      >
        {title}
      </motion.h1>
      <motion.span
        variants={singleShoeInfoVariants}
        className="single-shoe__color-way"
      >
        {colorWay}
      </motion.span>
      <motion.div
        variants={singleShoeInfoVariants}
        className="single-shoe__price"
      >
        <h2>{price}</h2>
        <AnimatePresence>
          {isFavoritePopUpVisible && (
            <SingleShoeInfoPopUp
              key="favorite-popup"
              text="Added to your favorites"
              setVisibleFunction={setIsFavoritePopUpVisible}
            />
          )}
          {isCartPopUpVisible && (
            <SingleShoeInfoPopUp
              key="cart-popup"
              text="Added to your shopping cart"
              setVisibleFunction={setIsCartPopUpVisible}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <motion.span
        variants={singleShoeInfoVariants}
        className="single-shoe__desc"
      >
        Description:{" "}
      </motion.span>
      <motion.p
        variants={singleShoeInfoVariants}
        className="single-shoe__description"
      >
        {description}
      </motion.p>
      <motion.div
        variants={singleShoeInfoVariants}
        className="single-shoe__features features"
      >
        <h4>Main features:</h4>
        <div>
          <ul className="features__list">
            <li>Gender:</li>
            <li>Material: </li>
            <li>Style: </li>
            <li>Manufacturer: </li>
          </ul>
          <ul className="features__list features__list-titles">
            <li>{gender}</li>
            <li>{material}</li>
            <li>{style}</li>
            <li>{manufacturer}</li>
          </ul>
        </div>
      </motion.div>
      <div className="single-shoe__buttons">
        <motion.button
          variants={singleShoeInfoVariants}
          disabled={favoriteButtonState}
          className="single-shoe__buttons-favorites"
          onClick={onAddFavoriteClick}
        >
          {favoriteButtonState
            ? "Already in your favorites"
            : "Add to your favorites"}
        </motion.button>
        <motion.button
          variants={singleShoeInfoVariants}
          disabled={cartButtonState}
          className="single-shoe__buttons-cart"
          onClick={onAddCartClick}
        >
          {cartButtonState
            ? "Already in your shopping cart"
            : "Add to your shopping cart"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SingleShoeInfo;
