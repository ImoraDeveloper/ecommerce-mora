import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCount from "../ButtonCount";

const ItemDetail = ({ product }) => {
  const navigate = useNavigate;
  product.stock = 10;
  const [qtyAdded, setQtyAdded] = useState(0);
  const handelConfirm = (qty) => {
    setQtyAdded(qty);
  };
  const handleTerminate = () => {
    navigate("/cart");
  };
  console.log(product);
  console.log(qtyAdded);
  return (
    <div>
      <h1>{product.tittle}</h1>
      <img src={product.image} />
      <p>{product.description}</p>
      <div>
        {!qtyAdded ? (
          <ButtonCount onConfirm={handelConfirm} maxQuantity={product.stock} />
        ) : (
          <button onClick={handleTerminate}>Terminar compra</button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
