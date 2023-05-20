import React from "react";

import { motion } from "framer-motion";
import { popupVariants } from "../../utils/framerMotion";

import "./onAddFavoritesPopUp.scss";

export const OnAddFavoritesPopUp = ({ setIsVisible }) => {
  React.useEffect(() => {
    setTimeout(() => setIsVisible(false), 3000);
  }, []);

  return (
    <motion.div
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="popup"
      key="popup"
    >
      <span>Added to favorites</span>
    </motion.div>
  );
};

export default OnAddFavoritesPopUp;
