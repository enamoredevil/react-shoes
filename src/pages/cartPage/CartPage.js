import React from "react";

import { Helmet } from "react-helmet";

import CartTop from "../../components/cartPageComponents/cartTop/CartTop";
import CartHistoryModal from "../../components/cartPageComponents/cartHistoryModal/CartHistoryModal";
import CartModal from "../../components/cartPageComponents/cartModal/CartModal";

import { setCartShoeContent } from "../../utils/setContentFunctions";

import ShoesService from "../../services/ShoesService";

import { motion, AnimatePresence } from "framer-motion";
import { animatedPagesVariants } from "../../utils/framerMotion";

import "./cartPage.scss";

const CartPage = () => {
  const [cartShoes, setCartShoes] = React.useState([]);
  const [isFormVisible, setIsFormVisible] = React.useState(false);
  const [isHistoryVisible, setIsHistoryVisible] = React.useState(false);

  const { getCartShoes, toggleCartShoe, status, setStatus } = ShoesService();

  React.useEffect(() => {
    window.scrollTo(0, 0);
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

  const calculatePrice = (cartShoes) => {
    let price = 0;
    cartShoes.forEach((currentItem) => {
      price += parseFloat(currentItem.price);
    });
    return +price.toFixed(2);
  };

  const price = calculatePrice(cartShoes);
  const content = setCartShoeContent(status, cartShoes, onShoeDelete);

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
          price={price}
          setCartShoes={setCartShoes}
          cartShoes={cartShoes}
          setIsFormVisible={setIsFormVisible}
          setIsHistoryVisible={setIsHistoryVisible}
        />
        <div className="cart__list">
          <AnimatePresence>{content}</AnimatePresence>
          <AnimatePresence>
            {isFormVisible && (
              <CartModal
                setIsFormVisible={setIsFormVisible}
                cartShoes={cartShoes}
                setCartShoes={setCartShoes}
                price={price}
              />
            )}
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
