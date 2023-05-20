import React from "react";

import ShoesTop from "../../components/shoesTop/ShoesTop";

import ShoesService from "../../services/ShoesService";

import { setShoesContent } from "../../utils/setContentFunctions";

import "./shoesPage.scss";

const ShoesPage = ({ gender }) => {
  const [shoes, setShoes] = React.useState(null);

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

  const content = setShoesContent(status, shoes);

  return (
    <section className="shoes">
      <div className="shoes__container container">
        <ShoesTop gender={gender} />
        <div className="shoes__list">{content}</div>
      </div>
    </section>
  );
};

export default ShoesPage;
