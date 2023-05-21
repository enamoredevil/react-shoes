import React from "react";
import { Link } from "react-router-dom";

import "./favoritesItem.scss";

const FavoritesItem = ({ shoe, onShoeDelete }) => {
  const { title, price, images, gender, id } = shoe;

  return (
    <div className="favorites__item">
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
          onClick={() => onShoeDelete(id, "false")}
          className="favorites__item-delete"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FavoritesItem;
