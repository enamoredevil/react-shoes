import React from "react";

import ShoesTop from "../../components/shoesTop/ShoesTop";
import ShoesSearch from "../../components/shoesSearch/ShoesSearch";
import ShoesFilters from "../../components/shoesFilters/ShoesFilters";
import ShoesSorter from "../../components/shoesSorter/ShoesSorter";

import ShoesService from "../../services/ShoesService";

import { setShoesContent } from "../../utils/setContentFunctions";

import {
  filterShoesByButton,
  filterShoesByString,
  sortShoes,
} from "../../utils/filterFunctions";

import { motion } from "framer-motion";
import { animatedPagesVariants } from "../../utils/framerMotion";

import "./shoesPage.scss";

const ShoesPage = ({ gender }) => {
  const [shoes, setShoes] = React.useState([]);
  const [filterString, setFilterString] = React.useState("");
  const [filterButton, setFilterButton] = React.useState("All");
  const [sortParameter, setSortParameter] = React.useState("");

  const { getAllShoes, status, setStatus } = ShoesService();

  React.useEffect(() => {
    async function fetchData() {
      const response = await getAllShoes(gender);
      if (!response) {
        setStatus("error");
      } else {
        setShoes(response);
        setStatus("confirmed");
      }
    }
    fetchData();
  }, [gender]);

  const filtredShoes = filterShoesByButton(
    filterShoesByString(sortShoes(shoes, sortParameter), filterString),
    filterButton
  );

  const content = setShoesContent(status, filtredShoes);

  return (
    <motion.section
      variants={animatedPagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="shoes"
    >
      <div className="shoes__container container">
        <ShoesTop gender={gender} />
        <motion.div initial="hidden" animate="visible" className="shoes__panel">
          <ShoesSearch setFilterString={setFilterString} />
          <ShoesFilters setFilterButton={setFilterButton} shoes={shoes} />
          <ShoesSorter setSortParameter={setSortParameter} />
        </motion.div>
        {content}
      </div>
    </motion.section>
  );
};

export default ShoesPage;
