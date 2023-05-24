import React from "react";

import _ from "lodash";

import { motion } from "framer-motion";
import { animatedPanelVariants } from "../../../utils/framerMotion";

import "./shoesFilters.scss";

const ShoesFilters = ({ shoes, setFilterButton }) => {
  const [activeButton, setActiveButton] = React.useState(-1);

  const brands = _.uniq(shoes.map((item) => item.manufacturer));

  const onButtonClick = (event, index) => {
    setActiveButton(index);
    setFilterButton(event.target.getAttribute("data-brand"));
  };

  const buttons = brands.map((brand, index) => {
    const clazz =
      activeButton === index
        ? "shoes__filters-button shoes__filters-button_active"
        : "shoes__filters-button";

    return (
      <motion.li variants={animatedPanelVariants} key={brand}>
        <button
          data-brand={brand}
          onClick={(event) => onButtonClick(event, index)}
          className={clazz}
        >
          {brand}
        </button>
      </motion.li>
    );
  });

  return (
    <div className="shoes__filters">
      <ul className="shoes__filters-list">
        <motion.li variants={animatedPanelVariants}>
          <button
            data-brand="All"
            onClick={(event) => onButtonClick(event, -1)}
            className={
              activeButton === -1
                ? "shoes__filters-button shoes__filters-button_active"
                : "shoes__filters-button"
            }
          >
            All
          </button>
        </motion.li>
        {buttons}
      </ul>
    </div>
  );
};

export default ShoesFilters;
