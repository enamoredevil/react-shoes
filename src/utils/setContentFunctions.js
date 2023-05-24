import { MoonLoader } from "react-spinners";

import { motion, AnimatePresence } from "framer-motion";
import { historyItemVariants } from "./framerMotion";

import ShoesItem from "../components/shoesPageComponents/shoesItem/ShoesItem";
import ShoesSkeleton from "../components/shoesPageComponents/shoesSkeleton/ShoesSkeleton";
import ShoesItemsNotFound from "../components/shoesPageComponents/shoesItemsNotFound/ShoesItemsNotFound";

import SingleShoeSlider from "../components/singleShoePageComponents/singleShoeSlider/SingleShoeSlider";
import SingleShoeInfo from "../components/singleShoePageComponents/singleShoeInfo/SingleShoeInfo";

import FavoritesItem from "../components/favoritesPageComponents/favoritesItem/FavoritesItem";
import FavoritesEmpty from "../components/favoritesPageComponents/favoritesEmpty/FavoritesEmpty";

import CartItem from "../components/cartPageComponents/cartItem/CartItem";
import CartEmpty from "../components/cartPageComponents/cartEmpty/CartEmpty";

import LoadingError from "../components/loadingError/LoadingError";

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
      return <LoadingError />;
    default:
      return <LoadingError />;
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
      return <LoadingError />;

    default:
      return <LoadingError />;
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
      return <LoadingError />;

    default:
      return <LoadingError />;
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
      return <LoadingError />;

    default:
      return <LoadingError />;
  }
};

export const setCartHistoryContent = (status, orders) => {
  switch (status) {
    case "loading":
      return <MoonLoader color="#000" size={80} speedMultiplier={1} />;

    case "confirmed":
      if (orders.length === 0) {
        return <h4>EMPTY</h4>;
      }
      return orders.map((order, index) => {
        const { createdAt, name, price } = order;

        return (
          <motion.li variants={historyItemVariants} key={name + index}>
            <h5>{createdAt.slice(0, -14)}</h5>
            <span>Name: {name}</span>
            <span>Paid: {price} €</span>
          </motion.li>
        );
      });

    case "error":
      return <LoadingError />;

    default:
      return <LoadingError />;
  }
};
