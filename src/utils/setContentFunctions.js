import { MoonLoader } from "react-spinners";

import { motion, AnimatePresence } from "framer-motion";

import ShoesItem from "../components/shoesItem/ShoesItem";
import ShoesSkeleton from "../components/shoesSkeleton/ShoesSkeleton";
import ShoesError from "../components/shoesError/ShoesError";
import ShoesItemsNotFound from "../components/shoesItemsNotFound/ShoesItemsNotFound";

import SingleShoeSlider from "../components/singleShoeSlider/SingleShoeSlider";
import SingleShoeInfo from "../components/singleShoeInfo/SingleShoeInfo";

import FavoritesItem from "../components/favoritesItem/FavoritesItem";
import FavoritesEmpty from "../components/favoritesEmpty/FavoritesEmpty";

import CartItem from "../components/cartItem/CartItem";
import CartEmpty from "../components/cartEmpty/CartEmpty";

export const setShoesContent = (status, shoes) => {
  switch (status) {
    case "loading":
      return (
        <motion.div layout className="shoes__list">
          {[...Array(16)].map((_, index) => (
            <ShoesSkeleton key={index} />
          ))}
        </motion.div>
      );

    case "confirmed":
      if (shoes.length === 0) {
        return <ShoesItemsNotFound />;
      }
      return (
        <motion.div layout className="shoes__list">
          {shoes.map((item) => {
            return <ShoesItem key={item.id} item={item} />;
          })}
        </motion.div>
      );
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

export const setFavoritesShoeContent = (status, favShoes, onShoeDelete) => {
  switch (status) {
    case "loading":
      return (
        <div className="favorites__loading">
          <MoonLoader color="#000" size={80} speedMultiplier={1} />
        </div>
      );

    case "confirmed":
      if (favShoes.length === 0) {
        return <FavoritesEmpty />;
      }
      return (
        <motion.div layout className="favorites__list">
          <AnimatePresence>
            {favShoes.map((shoe) => {
              return (
                <FavoritesItem
                  key={shoe.id}
                  onShoeDelete={onShoeDelete}
                  shoe={shoe}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      );
    case "error":
      return <h2>ERROR</h2>;

    default:
  }
};

export const setCartShoeContent = (status, cartShoes, onShoeDelete) => {
  switch (status) {
    case "loading":
      return <MoonLoader color="#000" size={80} speedMultiplier={1} />;

    case "confirmed":
      if (cartShoes.length === 0) {
        return <CartEmpty />;
      }
      return cartShoes.map((shoe) => (
        <CartItem key={shoe.id} shoe={shoe} onShoeDelete={onShoeDelete} />
      ));
    case "error":
      return <h2>ERROR</h2>;

    default:
  }
};
