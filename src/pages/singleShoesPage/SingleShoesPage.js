import React from "react";

import ShoesService from "../../services/ShoesService";
import { useParams } from "react-router-dom";

import { setSingleShoeContent } from "../../utils/setContentFunctions";

import { motion } from "framer-motion";
import { animatedPagesVariants } from "../../utils/framerMotion";

import "./singleShoesPage.scss";

const SingleShoesPage = () => {
  const [shoe, setShoe] = React.useState({});

  const { id } = useParams();

  const { getSingleShoe, status, setStatus } = ShoesService();

  React.useEffect(() => {
    window.scrollTo(0, 0)
    async function fetchData() {
      const response = await getSingleShoe(id);
      if (response) {
        setShoe(response);
        setStatus("confirmed");
      } else {
        setStatus("error");
      }
    }
    fetchData();
  }, [id]);

  const content = setSingleShoeContent(status, shoe);

  return (
    <motion.section
      variants={animatedPagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="single-shoe"
    >
      <div className="single-shoe__container container">{content}</div>
    </motion.section>
  );
};

export default SingleShoesPage;
