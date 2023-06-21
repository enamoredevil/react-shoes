import { MoonLoader, BeatLoader } from "react-spinners";

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
    case "pending":
      return (
        <motion.div layout className="shoes__list">
          {[...Array(16)].map((_, index) => (
            <ShoesSkeleton key={index} />
          ))}
        </motion.div>
      );

    case "fulfilled":
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
    case "rejected":
      return <LoadingError />;
    default:
      return <LoadingError />;
  }
};

export const setSingleShoeContent = (status) => {
  switch (status) {
    case "pending":
      return (
        <div className="single-shoe__loading">
          <MoonLoader color="#000" size={80} />
        </div>
      );

    case "fulfilled":
      return (
        <>
          <SingleShoeSlider />
          <SingleShoeInfo />
        </>
      );

    case "rejected":
      return <LoadingError />;

    default:
      return <LoadingError />;
  }
};

export const setFavoritesShoeContent = (status, favShoes) => {
  switch (status) {
    case "pending":
      return (
        <div className="favorites__loading">
          <MoonLoader color="#000" size={80} speedMultiplier={1} />
        </div>
      );

    case "fulfilled":
      if (favShoes.length === 0) {
        return <FavoritesEmpty />;
      }
      return (
        <motion.div layout className="favorites__list">
          <AnimatePresence>
            {favShoes.map((shoe) => {
              return <FavoritesItem key={shoe.id} shoe={shoe} />;
            })}
          </AnimatePresence>
        </motion.div>
      );
    case "rejected":
      return <LoadingError />;

    default:
      return <LoadingError />;
  }
};

export const setCartShoeContent = (status, cartShoes) => {
  switch (status) {
    case "pending":
      return <MoonLoader color="#000" size={80} speedMultiplier={1} />;

    case "fulfilled":
      if (cartShoes.length === 0) {
        return <CartEmpty />;
      }
      return cartShoes.map((shoe) => <CartItem key={shoe.id} shoe={shoe} />);
    case "rejected":
      return <LoadingError />;

    default:
      return <LoadingError />;
  }
};

export const setCartHistoryContent = (status, orders) => {
  switch (status) {
    case "pending":
      return <MoonLoader color="#000" size={80} speedMultiplier={1} />;

    case "fulfilled":
      if (orders.length === 0) {
        return <h4>No one has ordered anything yet...</h4>;
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

    case "rejected":
      return <LoadingError />;

    default:
      return <LoadingError />;
  }
};

// for the buttons in "singleShoeInfo" component
export const setButtonsContent = (status, type) => {
  switch (status) {
    case "true":
      return <span>Already in your {type}</span>;

    case "false":
      return <span>Add to your {type}</span>;

    case "pending":
      return <BeatLoader color="#ff0000" size={20} speedMultiplier={0.5} />;

    default:
      return <BeatLoader color="#ff0000" size={20} speedMultiplier={0.5} />;
  }
};
