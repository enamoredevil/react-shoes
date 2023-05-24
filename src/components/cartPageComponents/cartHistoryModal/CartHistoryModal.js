import React from "react";

import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import ShoesService from "../../../services/ShoesService";

import { setCartHistoryContent } from "../../../utils/setContentFunctions";

import { motion } from "framer-motion";
import { cartModalVariants } from "../../../utils/framerMotion";

import "./cartHistoryModal.scss";

const CartHistoryModal = ({ setIsHistoryVisible }) => {
  const [orders, setOrders] = React.useState([]);

  const { getOrders, status, setStatus } = ShoesService();

  React.useEffect(() => {
    window.addEventListener("keydown", closeModalByEscape);
    disableBodyScroll(document.body);

    async function fetchData() {
      const response = await getOrders();
      if (!response) {
        setStatus("error");
      } else {
        setOrders(response);
        setStatus("confirmed");
      }
    }
    fetchData();

    return () => {
      enableBodyScroll(document.body);
      window.removeEventListener("keydown", closeModalByEscape);
    };
  }, []);

  const closeModalByEscape = (event) => {
    if (event.code === "Escape") {
      setIsHistoryVisible(false);
    }
  };

  const content = setCartHistoryContent(status, orders);

  return (
    <div
      onClick={() => setIsHistoryVisible(false)}
      className="cart__history-modal"
    >
      <motion.div
        variants={cartModalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(event) => event.stopPropagation()}
        className="cart__history-modal-content"
      >
        <button
          onClick={() => setIsHistoryVisible(false)}
          className="cart__history-modal-close-btn"
        >
          <svg height="48" viewBox="0 -960 960 960" width="48">
            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </button>
        <h2>History</h2>
        <ul className="cart__history-modal-list">{content}</ul>
      </motion.div>
    </div>
  );
};

export default CartHistoryModal;
