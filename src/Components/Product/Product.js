import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;

  return (
    <div className="product">
      <div className="product-info">
        <img src={img}></img>
        <p className="product-name">{name}</p>
        <p>
          <small>Price : ${price}</small>
        </p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings : {ratings}</small>
        </p>
      </div>
      <button
        onClick={() => props.addToCart(props.product)}
        className="button-cart"
      >
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
