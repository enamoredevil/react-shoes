import { Helmet } from "react-helmet";

import Hero from "../components/hero/Hero";
import Catalog from "../components/catalog/Catalog";

import { motion } from "framer-motion";
import { animatedPagesVariants } from "../utils/framerMotion";

const MainPage = () => {
  return (
    <motion.div
      variants={animatedPagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Helmet>
        <title>Shoes</title>
        <meta name="description" content="Shoes Main Page" />
      </Helmet>
      <Hero />
      <Catalog />
    </motion.div>
  );
};

export default MainPage;
