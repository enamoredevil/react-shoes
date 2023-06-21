import React from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleShoe,
  singleShoeSelector,
} from "../../redux/slices/singleShoeSlice";

import { Helmet } from "react-helmet";

import { setSingleShoeContent } from "../../utils/setContentFunctions";

import { motion } from "framer-motion";
import { animatedPagesVariants } from "../../utils/framerMotion";

import "./singleShoesPage.scss";

const SingleShoesPage = () => {
  const { id } = useParams();

  const { shoe, status } = useSelector(singleShoeSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleShoe(id));
  }, [id]);

  const content = setSingleShoeContent(status);

  return (
    <motion.section
      variants={animatedPagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="single-shoe"
    >
      {shoe && (
        <Helmet>
          <title>Shoes - {`${shoe.title}`}</title>
          <meta
            name="description"
            content={`Page with shoes for ${shoe.title}`}
          />
        </Helmet>
      )}
      <div className="single-shoe__container container">{content}</div>
    </motion.section>
  );
};

export default SingleShoesPage;
