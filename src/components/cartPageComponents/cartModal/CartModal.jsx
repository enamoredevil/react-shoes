import React from "react";

import { usePostOrderMutation } from "../../../api/orders";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartShoe,
  cartShoesSelector,
} from "../../../redux/slices/cartShoesSlice";

import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { toast } from "react-toastify";

import { motion } from "framer-motion";

import { cartModalVariants } from "../../../utils/framerMotion";

import "./cartModal.scss";

const CartModal = ({ setIsFormVisible }) => {
  const [postOrder] = usePostOrderMutation();

  const { cartShoes, totalPrice } = useSelector(cartShoesSelector);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string("Name must be a string")
      .matches(/\D/gi, "Name can't contain only numbers")
      .required("Name is required")
      .min(4, "Name must be more than 4 letters"),
    email: Yup.string("Email must be a string")
      .email("Enter corrent email")
      .required("Email is required"),
  });

  const closeModalByEscape = React.useCallback(
    (event) => {
      if (event.code === "Escape") {
        setIsFormVisible(false);
      }
    },
    [setIsFormVisible]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", closeModalByEscape);

    disableBodyScroll(document.body);

    return () => {
      enableBodyScroll(document.body);
      window.removeEventListener("keydown", closeModalByEscape);
    };
  }, [closeModalByEscape]);

  const onFormSubmit = ({ name, email }, actions) => {
    setIsFormVisible(false);
    toast.success("Your order is accepted");
    actions.resetForm();
    postOrder({
      name: name,
      email: email,
      price: totalPrice,
      shoes: cartShoes,
    });
    cartShoes.forEach((item) => {
      dispatch(removeCartShoe({ id: item.id }));
    });
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
          <span>{totalPrice} €</span>
        </div>
        <div className="cart__modal-buttons">
          <button onClick={() => setIsFormVisible(false)}>Back</button>
          <button
            disabled={totalPrice === 0 ? true : false}
            form="form"
            type="submit"
          >
            Buy
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CartModal;
