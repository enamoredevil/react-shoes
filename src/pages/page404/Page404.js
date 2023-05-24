import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  page404Variants,
  page404ContentVariants,
} from "../../utils/framerMotion";

import "./page404.scss";

const Page404 = () => {
  return (
    <motion.div
      variants={page404Variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="page-404"
    >
      <div className="page-404__container container">
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <motion.div
          variants={page404ContentVariants}
          className="page-404__content"
        >
          <h1>Oh, stranger, looks like you got lost in the 404 dimension</h1>
          <Link to="/">Home</Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page404;
