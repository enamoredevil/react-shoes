import React from "react";
import { Link } from "react-router-dom";

import ShoesService from "../../services/ShoesService";

import { motion } from "framer-motion";
import { shoesItemVariants } from "../../utils/framerMotion";

import "./shoesItem.scss";

const ShoesItem = ({ item }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const { toggleFavoriteShoe } = ShoesService();

  const { title, price, images, id, isFavorite } = item;

  React.useEffect(() => {
    setIsAdded(isFavorite === "true" ? true : false);
  }, [isFavorite]);

  const onAddFavoriteClick = async () => {
    setIsAdded(!isAdded);
    const action = isAdded ? "false" : "true";
    await toggleFavoriteShoe(id, action);
  };
 
  return (
    <motion.div
      variants={shoesItemVariants}
      initial="hidden"
      animate="visible"
      className="shoes__item"
      layout
    >
      <div className="shoes__item-img">
        <img src={images[0]} alt={title} />
      </div>
      <h2 className="shoes__item-title">{title}</h2>
      <span className="shoes__item-price">{price}</span>
      <div className="shoes__item-buttons">
        <button
          onClick={onAddFavoriteClick}
          className={
            isAdded
              ? "shoes__item-favorite-btn_added"
              : "shoes__item-favorite-btn"
          }
        >
          {isAdded ? (
            <svg width="20" height="20" viewBox="0 0 12 9">
              <path
                d="M9.6567 0.620692C9.83936 0.436333 10.0876 0.331772 10.3471 0.329861C10.6066 0.327949 10.8563 0.428842 11.0416 0.61049C11.227 0.792138 11.3329 1.03977 11.3362 1.29927C11.3395 1.55877 11.24 1.80903 11.0594 1.99536L5.83271 8.52936C5.74292 8.62603 5.63456 8.70362 5.51412 8.75749C5.39368 8.81136 5.26362 8.84041 5.1317 8.8429C4.99979 8.84539 4.86872 8.82127 4.74633 8.77198C4.62394 8.72269 4.51274 8.64924 4.41937 8.55602L0.954039 5.09202C0.76989 4.90779 0.666472 4.65794 0.666534 4.39746C0.666597 4.13697 0.770135 3.88717 0.954372 3.70302C1.13861 3.51888 1.38845 3.41546 1.64894 3.41552C1.90943 3.41558 2.15922 3.51912 2.34337 3.70336L5.08404 6.44469L9.6307 0.651358C9.63897 0.640817 9.64787 0.630798 9.65737 0.621358L9.6567 0.620692Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 12 12" fill="none">
              <path
                d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                fill="#D3D3D3"
              />
            </svg>
          )}
        </button>
        <Link className="shoes__item-more-link" to={`shoes/${item.id}`}>
          Read more
        </Link>
      </div>
    </motion.div>
  );
};

export default ShoesItem;
