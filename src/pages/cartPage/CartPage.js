import React from "react";

import CartTop from "../../components/cartTop/CartTop";

import { setCartShoeContent } from "../../utils/setContentFunctions";

import ShoesService from "../../services/ShoesService";

import { motion, AnimatePresence } from "framer-motion";
import { animatedPagesVariants } from "../../utils/framerMotion";

import "./cartPage.scss";

const CartPage = () => {
  const [cartShoes, setCartShoes] = React.useState([]);

  const { getCartShoes, toggleCartShoe, status, setStatus } = ShoesService();

  React.useEffect(() => {
    async function fetchData() {
      const response = await getCartShoes();
      if (!response) {
        setStatus("error");
      } else {
        setCartShoes(response);
        setStatus("confirmed");
      }
    }
    fetchData();
  }, []);

  const onShoeDelete = (id) => {
    setCartShoes((cartShoes) => cartShoes.filter((item) => item.id !== id));
    toggleCartShoe(id, "false");
  };

  const content = setCartShoeContent(status, cartShoes, onShoeDelete);

  return (
    <motion.section
      variants={animatedPagesVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="cart"
    >
      <div className="cart__container container">
        <CartTop cartShoes={cartShoes} />
        <div className="cart__list">
          <AnimatePresence>{content}</AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default CartPage;
