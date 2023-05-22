import React from "react";

import { motion } from "framer-motion";
import {
  animatedTitleVariants,
  animatedLettersVariants,
} from "../../utils/framerMotion";

import "./animatedTitle.scss";

const AnimatedTitle = () => {
  const lineOne = "AUTRY ACTION SHOES WMNS MEDALIST LOW";
  const lineTwo = "already in stock";

  return (
    <motion.h1
      variants={animatedTitleVariants}
      initial="hidden"
      animate="visible"
      className="title"
    >
      {lineOne.split("").map((char, index) => {
        return (
          <motion.span key={char + index} variants={animatedLettersVariants}>
            {char}
          </motion.span>
        );
      })}
      <br />
      {lineTwo.split("").map((char, index) => {
        return (
          <motion.span key={char + index} variants={animatedLettersVariants}>
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

export default AnimatedTitle;
