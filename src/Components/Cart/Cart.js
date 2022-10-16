import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h3>Purchase Details</h3>
      <p>Selected Items : {cart.length}</p>
    </div>
  );
};

export default Cart;
