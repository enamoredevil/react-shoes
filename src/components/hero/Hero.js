import React from "react";

import AnimatedTitle from "../animatedTitle/AnimatedTitle";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  animatedHeroSubtitleVariants,
  animatedHeroLinkVariants,
} from "../../utils/framerMotion";

import previewHero from "../../assets/hero/preview_hero.jpg";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__info">
          <AnimatedTitle />
          <motion.p
            variants={animatedHeroSubtitleVariants}
            className="hero__description"
          >
            Check out our collection of over 50 Autry models
          </motion.p>
          <motion.div variants={animatedHeroLinkVariants}>
            <Link className="hero__link" to="/women/shoes/36">
              Read more
            </Link>
          </motion.div>
        </div>
        <div className="hero__image-block">
          <img src={previewHero} alt="AUTRY-ACTION-SHOES-WMNS-MEDALIST-LOW" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
