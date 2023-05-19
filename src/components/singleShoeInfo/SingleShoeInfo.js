import React from "react";

import "./singleShoeInfo.scss";

const SingleShoeInfo = ({ shoe }) => {
  const {
    title,
    colorWay,
    price,
    description,
    gender,
    material,
    style,
    manufacturer,
  } = shoe;

  return (
    <div className="single-shoe__info">
      <h1 className="single-shoe__title">{title}</h1>
      <span className="single-shoe__color-way">{colorWay}</span>
      <h2 className="single-shoe__price">{price}</h2>
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
        <button className="single-shoe__buttons-favorites">
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
