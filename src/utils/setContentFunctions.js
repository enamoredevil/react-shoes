import { MoonLoader } from "react-spinners";

import ShoesItem from "../components/shoesItem/ShoesItem";
import ShoesSkeleton from "../components/shoesSkeleton/ShoesSkeleton";
import ShoesError from "../components/shoesError/ShoesError";

import SingleShoeSlider from "../components/singleShoeSlider/SingleShoeSlider";
import SingleShoeInfo from "../components/singleShoeInfo/SingleShoeInfo";

import FavoritesItem from "../components/favoritesItem/FavoritesItem";
import FavoritesEmpty from "../components/favoritesEmpty/FavoritesEmpty";

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
      return (
        <div className="single-shoe__loading">
          <MoonLoader color="#000" size={80} />
        </div>
      );

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

export const setFavoritesShoeContent = (status, FavShoes, onShoeDelete) => {
  switch (status) {
    case "loading":
      return (
        <div className="favorites__loading">
          <MoonLoader color="#000" size={80} speedMultiplier={1} />
        </div>
      );

    case "confirmed":
      if (FavShoes.length === 0) {
        return <FavoritesEmpty />;
      }
      return (
        <div className="favorites__list">
          {FavShoes.map((shoe) => {
            return (
              <FavoritesItem
                key={shoe.id}
                onShoeDelete={onShoeDelete}
                shoe={shoe}
              />
            );
          })}
        </div>
      );
    case "error":
      return <h2>ERROR</h2>;

    default:
  }
};
