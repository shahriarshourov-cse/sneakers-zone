import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div className="cart">
      <h3>Purchase Details</h3>
      <p>Selected Items : {cart.length}</p>
      <p>Price : ${total} </p>
      <p>Shipping : </p>
      <p>TAX :</p>
      <h4>Grand Total : </h4>
    </div>
  );
};

export default Cart;
