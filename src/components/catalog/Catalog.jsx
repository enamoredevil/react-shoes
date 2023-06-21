import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  animatedLettersVariants,
  animatedTitleVariants,
  animatedCatalogItemVariants,
  animatedCatalogItemCenterVariants,
} from "../../utils/framerMotion";

import "./catalog.scss";

const Catalog = () => {
  const line = "check out what we offer";

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className="catalog"
    >
      <div className="catalog__container container">
        <motion.h2 variants={animatedTitleVariants} className="catalog__title">
          {line.split("").map((char, index) => {
            return (
              <motion.span key={index} variants={animatedLettersVariants}>
                {char}
              </motion.span>
            );
          })}
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="catalog__block"
        >
          <motion.div
            variants={animatedCatalogItemVariants}
            custom="-100vw"
            className="catalog__item"
          >
            <img
              src="https://i.ibb.co/T4PH7KK/nike-air-force-1-low-retro-2.jpg"
              alt="men-catalog-sneakers"
            />
            <h4>Men Catalog</h4>
            <Link to="/men">Open</Link>
          </motion.div>
          <motion.div
            variants={animatedCatalogItemCenterVariants}
            className="catalog__item"
          >
            <img
              src="https://i.ibb.co/Drp1MTj/autry-action-shoes-wmns-01-mid-2.jpg"
              alt="women-catalog-sneakers"
            />
            <h4>Women Catalog</h4>
            <Link to="/women">Open</Link>
          </motion.div>
          <motion.div
            variants={animatedCatalogItemVariants}
            custom="100vw"
            className="catalog__item"
          >
            <img
              src="https://i.ibb.co/9Y3nQM3/asics-gel-nyc-2.jpg"
              alt="unisex-catalog-sneakers"
            />
            <h4>Unisex Catalog</h4>
            <Link to="/unisex">Open</Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Catalog;
