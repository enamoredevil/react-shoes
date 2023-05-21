import React from "react";

import { motion } from "framer-motion";
import { popupVariants } from "../../utils/framerMotion";

import "./singleShoeInfoPopUp.scss";

const SingleShoeInfoPopUp = ({ text, setVisibleFunction }) => {
  React.useEffect(() => {
    setTimeout(() => setVisibleFunction(false), 3000);
  }, []);

  return (
    <motion.div
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="single-shoe-popup"
    >
      <span>{text}</span>
    </motion.div>
  );
};

export default SingleShoeInfoPopUp;
