import React from "react";
import { Link } from "react-router-dom";

import "./shoesItem.scss";

const ShoesItem = ({ item }) => {
  const { title, price, images } = item;

  return (
    <div className="shoes__item">
      <div className="shoes__item-img">
        <img src={images[0]} alt={title} />
      </div>
      <h2 className="shoes__item-title">{title}</h2>
      <span className="shoes__item-price">{price}</span>
      <div className="shoes__item-buttons">
        <button className="shoes__item-favorite-btn"></button>
        <Link className="shoes__item-more-link" to={`shoes/${item.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ShoesItem;
