import React from "react";

import ShoesTop from "../../components/shoesTop/ShoesTop";
import ShoesSearch from "../../components/shoesSearch/ShoesSearch";

import ShoesService from "../../services/ShoesService";

import { setShoesContent } from "../../utils/setContentFunctions";

import { motion } from "framer-motion";
import { animatedPagesVariants } from "../../utils/framerMotion";

import "./shoesPage.scss";

const ShoesPage = ({ gender }) => {
  const [shoes, setShoes] = React.useState([]);
  const [filterString, setFilterString] = React.useState("");

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

  const filterShoesByString = (shoes, filterString) => {
    if (filterString.length === 0) {
      return shoes;
    } else {
      return shoes.filter((item) => {
        if (item.title.toLowerCase().indexOf(filterString.toLowerCase()) > -1) {
          return item;
        }
      });
    }
  };

  const content = setShoesContent(
    status,
    filterShoesByString(shoes, filterString)
  );

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
        <div className="shoes__filters">
          <ShoesSearch setFilterString={setFilterString} />
        </div>
        {content}
      </div>
    </motion.section>
  );
};

export default ShoesPage;
