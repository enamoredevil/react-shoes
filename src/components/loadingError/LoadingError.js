import React from "react";

import { motion } from "framer-motion";
import { loadingErrorVariants } from "../../utils/framerMotion";

import "./loadingError.scss";

const LoadingError = () => {
  return (
    <div className="error">
      <motion.div
        variants={loadingErrorVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="error__content"
      >
        <h2>Looks like some error has occured during the loading</h2>
      </motion.div>
    </div>
  );
};

export default LoadingError;
