import Hero from "../components/hero/Hero";
import Catalog from "../components/catalog/Catalog";

import { motion } from "framer-motion";
import { animatedPagesVariants } from "../utils/framerMotion";

const MainPage = () => {
  return (
    <motion.main
      variants={animatedPagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Hero />
      <Catalog />
    </motion.main>
  );
};

export default MainPage;
