import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchShoes, shoesSelector } from "../../redux/slices/shoesSlice";
import {
  filtersActions,
  filtersSelector,
} from "../../redux/slices/filtersSlice";

import { Helmet } from "react-helmet";

import ShoesTop from "../../components/shoesPageComponents/shoesTop/ShoesTop";
import ShoesSearch from "../../components/shoesPageComponents/shoesSearch/ShoesSearch";
import ShoesFilters from "../../components/shoesPageComponents/shoesFilters/ShoesFilters";
import ShoesSorter from "../../components/shoesPageComponents/shoesSorter/ShoesSorter";

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
  const dispatch = useDispatch();

  const { shoes, status } = useSelector(shoesSelector);

  const { activeFilter, activeSorter, searchString } =
    useSelector(filtersSelector);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(filtersActions.clearFilters());
    dispatch(fetchShoes(gender));
  }, [gender]);

  const filtredShoes = filterShoesByButton(
    filterShoesByString(sortShoes(shoes, activeSorter), searchString),
    activeFilter
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
      <Helmet>
        <title>Shoes - {gender}</title>
        <meta name="description" content={`Page with shoes for ${gender}`} />
      </Helmet>
      <div className="shoes__container container">
        <ShoesTop gender={gender} />
        <motion.div initial="hidden" animate="visible" className="shoes__panel">
          <ShoesSearch />
          {shoes && <ShoesFilters shoes={shoes} />}
          <ShoesSorter />
        </motion.div>
        {content}
      </div>
    </motion.section>
  );
};

export default ShoesPage;
