import React from "react";
import "./style.css";

const Item = ({ product }) => {
  return (
    <div className="card">
      <img>{product.img}</img>
      <div className="container">
        <h4>
          <b>{product.title}</b>
        </h4>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Item;
