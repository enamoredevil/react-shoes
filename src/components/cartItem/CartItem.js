import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { cartItemVariants } from "../../utils/framerMotion";

import "./cartItem.scss";

const CartItem = ({ shoe, onShoeDelete }) => {
  const { title, price, images, gender, id } = shoe;

  return (
    <motion.div
      variants={cartItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="cart__item"
    >
      <div className="cart__item-image">
        <img src={images[0]} alt={title} />
      </div>
      <div className="cart__item-info">
        <h2>{title}</h2>
        <span>{price}</span>
        <div className="cart__item-buttons">
          <Link to={`/${gender.toLowerCase()}/shoes/${id}`}>Read More</Link>
          <button onClick={() => onShoeDelete(id)}>Remove</button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
