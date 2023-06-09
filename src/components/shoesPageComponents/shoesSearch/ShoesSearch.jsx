import React from "react";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../../redux/slices/filtersSlice";

import { motion } from "framer-motion";
import { animatedPanelVariants } from "../../../utils/framerMotion";

import "./shoesSearch.scss";

const ShoesSearch = () => {
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    setValue(event.target.value);
    dispatch(filtersActions.setSearchString(event.target.value));
  };

  return (
    <motion.div variants={animatedPanelVariants} className="shoes__search">
      <input
        onChange={onInputChange}
        value={value}
        placeholder="Search"
        type="text"
      />
      <svg height="40" viewBox="0 96 960 960" width="40">
        <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
      </svg>
    </motion.div>
  );
};

export default ShoesSearch;
