import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import Item from "../Item";

const ItemList = ({ products }) => {
  const { setEstadoA } = useContext(Shop);

  const handleChanceState = () => {
    setEstadoA("Otro valor");
  };

  return (
    <ul className="global">
      {products.map((producto) => {
        return <Item product={producto} key={producto.id} />;
      })}
    </ul>
  );
};

export default ItemList;
