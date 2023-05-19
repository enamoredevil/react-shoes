import React from "react";

import "./shoesItem.scss";

const ShoesItem = ({item}) => {

  const {title, price, images} = item


  return (
    <div className="shoes__item">
      <div className="shoes__item-img">
        <img
          src={images[0]}
          alt={title}
        />
      </div>
      <h2 className="shoes__item-title">{title}</h2>
      <span className="shoes__item-price">{price}</span>
      <div className="shoes__item-buttons">
        <button className="shoes__item-favorite-btn" >
        </button>
        <button className="shoes__item-more-btn" >
          <a href="">Read more</a>
        </button>
      </div>
    </div>
  );
};

export default ShoesItem;
