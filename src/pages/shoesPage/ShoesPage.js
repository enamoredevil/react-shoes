import React from "react";

import ShoesService from "../../services/ShoesService";

import ShoesTop from "../../components/shoesTop/ShoesTop";
import ShoesItem from "../../components/shoesItem/ShoesItem";

import "./shoesPage.scss";

const ShoesPage = ({ gender }) => {
  const [shoes, setShoes] = React.useState([]);

  const { getAllShoes } = ShoesService();

  React.useEffect(() => {
    getAllShoes(gender)
    .then(result => setShoes(result))
  }, [gender]);



  const content = shoes.map(item => {
    return <ShoesItem key={item.id} item={item} />
  })

  return (
    <section className="shoes">
      <div className="shoes__container container">
        <ShoesTop gender={gender} />
        <div className="shoes__list">
          {content}
        </div>
      </div>
    </section>
  );
};

export default ShoesPage;
