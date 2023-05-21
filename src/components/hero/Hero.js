import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import previewSneakers from "../../assets/hero/preview-sneakers.webp";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <motion.div className="hero__info">
          <motion.h1 className="hero__title">
            NIKE WMNS AIR MAX 97 SE <br />
            already in stock
          </motion.h1>
          <p className="hero__description">
            Check out our collection of over 50 Nike models
          </p>
          <Link className="hero__link" to="/women/shoes/23">
            Read more
          </Link>
        </motion.div>
        <motion.div className="hero__image-block">
          <img src={previewSneakers} alt="nike-wmns-air-max-97-se" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
