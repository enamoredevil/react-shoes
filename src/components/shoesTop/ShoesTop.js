import React from "react";

import './shoesTop.scss'

export const ShoesTop = ({gender}) => {
  return (
    <div className="shoes__top">
      <h1>{gender}</h1>
      <span>Main - Catalog - {gender}</span>
    </div>
  );
};

export default ShoesTop