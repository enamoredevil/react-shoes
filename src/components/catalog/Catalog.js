import React from "react";

import { Link } from "react-router-dom";

import "./catalog.scss";

const Catalog = () => {

  return (
    <section className="catalog">
      <div className="catalog__container container">
        <h2 className="catalog__title">check out what we offer</h2>
        <div className="catalog__block">
          <div className="catalog__item">
            <img
              src="https://i.ibb.co/T4PH7KK/nike-air-force-1-low-retro-2.jpg"
              alt="men-catalog-sneakers"
            />
            <h4>Men Catalog</h4>
            <Link to="/men">Open</Link>
          </div>
          <div className="catalog__item">
            <img
              src="https://i.ibb.co/Drp1MTj/autry-action-shoes-wmns-01-mid-2.jpg"
              alt="women-catalog-sneakers"
            />
            <h4>Women Catalog</h4>
            <Link to="/women">Open</Link>
          </div>
          <div className="catalog__item">
            <img
              src="https://i.ibb.co/9Y3nQM3/asics-gel-nyc-2.jpg"
              alt="unisex-catalog-sneakers"
            />
            <h4>Unisex Catalog</h4>
            <Link to="/unisex">Open</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
