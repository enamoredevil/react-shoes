import React from "react";

import favorite from '../../assets/shoesItem/favorite.svg'
import "./shoesItem.scss";

const ShoesItem = ({item}) => {

  const {title, description, price, images} = item


  return (
    <div className="shoes__item">
      <img
        className="shoes__item-img"
        src={images[0]}
        alt=""
      />
      <h2 className="shoes__item-title">{title}</h2>
      <p className="shoes__item-description">
        {description.slice(0, 180) + '...'}
      </p>
      <span className="shoes__item-price">{price}</span>
      <div className="shoes__item-buttons">
        <button className="shoes__item-favorite-btn" >
          <img src={favorite} alt="favorite" />
        </button>
        <button className="shoes__item-more-btn" >
          <a href="">Read more</a>
        </button>
      </div>
    </div>
  );
};

export default ShoesItem;
