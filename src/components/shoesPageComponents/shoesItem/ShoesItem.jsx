import React from "react";

import { Link } from "react-router-dom";

import ShoesButton from "../shoesButton/ShoesButton";

import { motion } from "framer-motion";
import { shoesItemVariants } from "../../../utils/framerMotion";

import "./shoesItem.scss";

const ShoesItem = ({ item }) => {
  const { title, price, images, id, isFavorite } = item;

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
        <ShoesButton
          isFavorite={isFavorite === "true" ? true : false}
          id={id}
        />
        <Link className="shoes__item-more-link" to={`shoes/${item.id}`}>
          Read more
        </Link>
      </div>
    </motion.div>
  );
};

export default ShoesItem;
