import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = (tax + total + shipping).toFixed(2);
  return (
    <div className="cart">
      <h3>Purchase Details</h3>
      <p>Selected Items : {cart.length}</p>
      <p>Price : ${total} </p>
      <p>Shipping : ${shipping}</p>
      <p>TAX :{tax}</p>
      <h4>Grand Total: ${grandTotal}: </h4>
    </div>
  );
};

export default Cart;
