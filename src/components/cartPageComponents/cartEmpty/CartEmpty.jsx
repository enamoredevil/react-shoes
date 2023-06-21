import React from "react";

import { Link } from "react-router-dom";

import "./cartEmpty.scss";

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <h2>Your shopping cart is empty</h2>
      <p>
        Looks like you haven't added anything to your shopping cart. Go ahead
        and explore what we offer
      </p>
      <Link to="/men">Catalog</Link>
    </div>
  );
};

export default CartEmpty;
