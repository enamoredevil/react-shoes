import React from "react";

import { useSelector } from "react-redux";
import {
  addSingleShoeToFavorites,
  addSingleShoeToCart,
} from "../../../redux/slices/singleShoeSlice";
import { singleShoeSelector } from "../../../redux/slices/singleShoeSlice";

import SingleShoeButton from "../singleShoeButton/SingleShoeButton";

import { motion } from "framer-motion";
import { singleShoeInfoVariants } from "../../../utils/framerMotion";

import "./singleShoeInfo.scss";

const SingleShoeInfo = () => {
  const { shoe } = useSelector(singleShoeSelector);

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
    <motion.div
      transition={{ staggerChildren: 0.3 }}
      initial="hidden"
      animate="visible"
      className="single-shoe__info"
    >
      <motion.h1
        variants={singleShoeInfoVariants}
        className="single-shoe__title"
      >
        {title}
      </motion.h1>
      <motion.span
        variants={singleShoeInfoVariants}
        className="single-shoe__color-way"
      >
        {colorWay}
      </motion.span>
      <motion.div
        variants={singleShoeInfoVariants}
        className="single-shoe__price"
      >
        <h2>{price}</h2>
      </motion.div>
      <motion.span
        variants={singleShoeInfoVariants}
        className="single-shoe__desc"
      >
        Description:{" "}
      </motion.span>
      <motion.p
        variants={singleShoeInfoVariants}
        className="single-shoe__description"
      >
        {description}
      </motion.p>
      <motion.div
        variants={singleShoeInfoVariants}
        className="single-shoe__features features"
      >
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
      </motion.div>
      <div className="single-shoe__buttons">
        <SingleShoeButton
          addMethod={addSingleShoeToFavorites}
          type="favorites"
        />
        <SingleShoeButton
          addMethod={addSingleShoeToCart}
          type="shopping cart"
        />
      </div>
    </motion.div>
  );
};

export default SingleShoeInfo;
