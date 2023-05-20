import React from "react";

import ShoesService from "../../services/ShoesService";

import { AnimatePresence } from "framer-motion";
import OnAddFavoritesPopUp from "../onAddFavoritesPopUp/OnAddFavoritesPopUp";

import "./singleShoeInfo.scss";

const SingleShoeInfo = ({ shoe }) => {
  const [buttonState, setButtonState] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

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
    id,
  } = shoe;

  React.useEffect(() => {
    setButtonState(isFavorite === "false" ? false : true);
  }, [isFavorite]);

  const { toggleFavoriteShoe } = ShoesService();

  const onAddFavoriteClick = async () => {
    setIsVisible(true);
    setButtonState(true);
    await toggleFavoriteShoe(id, "true");
  };

  return (
    <div className="single-shoe__info">
      <h1 className="single-shoe__title">{title}</h1>
      <span className="single-shoe__color-way">{colorWay}</span>
      <div className="single-shoe__price">
        <h2>{price}</h2>
        <AnimatePresence>
          {isVisible && <OnAddFavoritesPopUp setIsVisible={setIsVisible} />}
        </AnimatePresence>
      </div>
      <span className="single-shoe__desc">Description: </span>
      <p className="single-shoe__description">{description}</p>
      <div className="single-shoe__features features">
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
      </div>
      <div className="single-shoe__buttons">
        <button
          disabled={buttonState}
          className="single-shoe__buttons-favorites"
          onClick={onAddFavoriteClick}
        >
          Add to favorites
        </button>
        <button className="single-shoe__buttons-cart">
          Add to shopping cart
        </button>
      </div>
    </div>
  );
};

export default SingleShoeInfo;
