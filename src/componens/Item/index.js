import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount";

const Item = ({ product }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    console.log("navega hacia el detail");
    navigate(`/detail/${product.id}`);
  };
  return (
    <div className="global" onClick={handleDetail}>
      <div className="card">
        <div className="card-d">
          <img src={product.image} />

          <div className="container">
            <h4>
              <b>{product.title}</b>
            </h4>
            <p>{product.price}</p>
          </div>
          <ItemCount />
        </div>
      </div>
    </div>
  );
};

export default Item;
