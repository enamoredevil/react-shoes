import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchCartShoes,
  cartShoesActions,
  cartShoesSelector,
} from "../../redux/slices/cartShoesSlice";

import { Helmet } from "react-helmet";

import CartTop from "../../components/cartPageComponents/cartTop/CartTop";
import CartHistoryModal from "../../components/cartPageComponents/cartHistoryModal/CartHistoryModal";
import CartModal from "../../components/cartPageComponents/cartModal/CartModal";

import { setCartShoeContent } from "../../utils/setContentFunctions";

import { motion, AnimatePresence } from "framer-motion";
import { animatedPagesVariants } from "../../utils/framerMotion";

import "./cartPage.scss";

const CartPage = () => {
  const [isFormVisible, setIsFormVisible] = React.useState(false);
  const [isHistoryVisible, setIsHistoryVisible] = React.useState(false);

  const { cartShoes, status, totalPrice } = useSelector(cartShoesSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCartShoes());
  }, []);

  React.useEffect(() => {
    dispatch(cartShoesActions.setTotalPrice());
  }, [cartShoes]);

  const content = setCartShoeContent(status, cartShoes);
  return (
    <motion.section
      variants={animatedPagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="cart"
    >
      <Helmet>
        <title>Shoes - Cart</title>
        <meta name="description" content="Shoes Cart Page" />
      </Helmet>
      <div className="cart__container container">
        <CartTop
          price={totalPrice}
          cartShoes={cartShoes}
          setIsFormVisible={setIsFormVisible}
          setIsHistoryVisible={setIsHistoryVisible}
        />
        <div className="cart__list">
          <AnimatePresence>{content}</AnimatePresence>
          <AnimatePresence>
            {isFormVisible && <CartModal setIsFormVisible={setIsFormVisible} />}
          </AnimatePresence>
          <AnimatePresence>
            {isHistoryVisible && (
              <CartHistoryModal setIsHistoryVisible={setIsHistoryVisible} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default CartPage;
