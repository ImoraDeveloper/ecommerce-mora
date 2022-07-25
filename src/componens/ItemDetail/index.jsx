/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";
import ButtonCount from "../ButtonCount";

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();
  product.stock = 10;
  const [qtyAdded, setQtyAdded] = useState(0);

  const { addItem } = useContext(Shop);

  const handelConfirm = (qty) => {
    setQtyAdded(qty);
  };
  const handleTerminate = () => {
    addItem(product, qtyAdded);
    navigate("/Cart");
  };

  const handleHome = () => {
    navigate("/");
  };
  console.log(product);
  console.log(qtyAdded);
  return (
    <div>
      <h1>{product.tittle}</h1>
      <img src={product.image} />
      <p>{product.description}</p>
      {!qtyAdded ? (
        <ButtonCount onConfirm={handelConfirm} maxQuantity={product.stock} />
      ) : (
        <button onClick={handleTerminate}>Terminar compra</button>
      )}
      <button onClick={handleHome}>Seguir comprando</button>
    </div>
  );
};

export default ItemDetail;
