import React from "react";

import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { singleShoeSelector } from "../../../redux/slices/singleShoeSlice";

import { setButtonsContent } from "../../../utils/setContentFunctions";

import { motion } from "framer-motion";
import { singleShoeInfoVariants } from "../../../utils/framerMotion";

const SingleShoeButton = ({ type, addMethod }) => {
  const { shoe, favorite, cart } = useSelector(singleShoeSelector);
  const dispatch = useDispatch();

  const { id } = shoe;

  const onAddFavorite = () => {
    toast.success(`Added to your ${type}`);
    dispatch(addMethod(id));
  };

  const content = setButtonsContent(
    type === "favorites" ? favorite : cart,
    type
  );

  let disabled;

  if (type === "favorites") {
    disabled = favorite === "true" || favorite === "pending" ? true : false;
  } else {
    disabled = cart === "true" || cart === "pending" ? true : false;
  }

  return (
    <motion.button
      disabled={disabled}
      variants={singleShoeInfoVariants}
      onClick={onAddFavorite}
    >
      {content}
    </motion.button>
  );
};

export default SingleShoeButton;
