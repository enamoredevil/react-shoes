import React from "react";

import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import ShoesService from "../../../services/ShoesService";

import { motion } from "framer-motion";

import {
  cartModalVariants,
  cartThanksMessageVariants,
} from "../../../utils/framerMotion";

import "./cartModal.scss";

const CartModal = ({ setIsFormVisible, cartShoes, setCartShoes, price }) => {
  const [isThanksMessage, setIsThanksMessage] = React.useState(false);

  const { postOrderData, toggleCartShoe } = ShoesService();

  const validationSchema = Yup.object({
    name: Yup.string("Name must be a string")
      .required("Name is required")
      .min(4, "Name must be more than 4 letters"),
    email: Yup.string()
      .email("Enter corrent email")
      .required("Email is required"),
  });

  React.useEffect(() => {
    window.addEventListener("keydown", closeModalByEscape);

    disableBodyScroll(document.body);

    return () => {
      enableBodyScroll(document.body);
      window.removeEventListener("keydown", closeModalByEscape);
    };
  }, []);

  const onFormSubmit = ({ name, email }, actions) => {
    actions.resetForm();
    setIsThanksMessage(true);
    setTimeout(() => {
      setIsThanksMessage(false);
      setIsFormVisible(false);
    }, 3000);
    const data = {
      name: name,
      email: email,
      price: price,
      shoes: [cartShoes],
    };
    postOrderData(data);
    cartShoes.forEach((item) => {
      toggleCartShoe(item.id, "false");
    });
    setCartShoes([]);
  };

  const closeModalByEscape = (event) => {
    if (event.code === "Escape") {
      setIsFormVisible(false);
    }
  };

  return (
    <div onClick={() => setIsFormVisible(false)} className="cart__modal">
      <motion.div
        variants={cartModalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(event) => event.stopPropagation()}
        className="cart__modal-content"
      >
        <button
          onClick={() => setIsFormVisible(false)}
          className="cart__modal-close-btn"
        >
          <svg height="48" viewBox="0 -960 960 960" width="48">
            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </button>
        <h2 className="cart__modal-title">Order</h2>
        {isThanksMessage && (
          <motion.h2
            variants={cartThanksMessageVariants}
            className="cart__modal-thanks-message"
          >
            Thanks for your order, we'll contact you for more details
          </motion.h2>
        )}
        <Formik
          validationSchema={validationSchema}
          onSubmit={(values, actions) => onFormSubmit(values, actions)}
          initialValues={{ name: "", email: "" }}
        >
          <Form id="form" className="cart__modal-form">
            <label htmlFor="name">Your name</label>
            <Field
              autoComplete="off"
              className="cart__modal-form-field"
              placeholder="Enter your name"
              name="name"
              id="name"
            ></Field>
            <ErrorMessage
              component="div"
              className="cart__modal-error"
              name="name"
            />
            <label htmlFor="email">Your email</label>
            <Field
              autoComplete="off"
              className="cart__modal-form-field"
              placeholder="Enter your email"
              name="email"
              id="email"
            ></Field>
            <ErrorMessage
              component="div"
              className="cart__modal-error"
              name="email"
            />
          </Form>
        </Formik>
        <div className="cart__modal-price">
          <h4>Total price:</h4>
          <span>{price} €</span>
        </div>
        <div className="cart__modal-buttons">
          <button onClick={() => setIsFormVisible(false)}>Back</button>
          <button form="form" type="submit">
            Buy
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CartModal;
