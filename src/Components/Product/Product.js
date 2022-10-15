import React from "react";
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
      </button>
    </div>
  );
};

export default Product;
