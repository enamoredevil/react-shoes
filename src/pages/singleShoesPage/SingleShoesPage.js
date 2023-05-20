import React from "react";

import ShoesService from "../../services/ShoesService";
import { useParams } from "react-router-dom";

import { setSingleShoeContent } from "../../utils/setContentFunctions";

import "./singleShoesPage.scss";

const SingleShoesPage = () => {
  const [shoe, setShoe] = React.useState({});

  const { id } = useParams();

  const { getSingleShoe, status, setStatus } = ShoesService();

  React.useEffect(() => {
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
    <section className="single-shoe">
      <div className="single-shoe__container container">
        {content}
      </div>
    </section>
  );
};

export default SingleShoesPage;
