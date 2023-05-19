import ShoesItem from "../components/shoesItem/ShoesItem";
import ShoesSkeleton from "../components/shoesSkeleton/ShoesSkeleton";
import ShoesError from "../components/shoesError/ShoesError";

import SingleShoeSlider from "../components/singleShoeSlider/SingleShoeSlider";
import SingleShoeInfo from "../components/singleShoeInfo/SingleShoeInfo";
import { MoonLoader } from "react-spinners";

export const setShoesContent = (status, shoes) => {
  switch (status) {
    case "loading":
      return [...Array(16)].map((_, index) => <ShoesSkeleton key={index} />);

    case "confirmed":
      return shoes.map((item) => {
        return <ShoesItem key={item.id} item={item} />;
      });
    case "error":
      return <ShoesError />;

    default:
  }
};

export const setSingleShoeContent = (status, shoe) => {
  switch (status) {
    case "loading":
      return <MoonLoader color="#000" size={120} />;

    case "confirmed":
      return (
        <>
          <SingleShoeSlider images={shoe.images} title={shoe.title} />
          <SingleShoeInfo shoe={shoe} />
        </>
      );

    case "error":
      return <h1>ERROR</h1>;

    default:
  }
};
