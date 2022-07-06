import React, { useState } from "react";
import "./style.css";

const ItemCount = ({ handledAdd, totalStock }) => {
  const [count, setCount] = useState(1);

  const onAdd = () => {
    setCount(Math.min(count + 1, totalStock));
  };

  const onDecrement = () => {
    setCount(Math.max(count - 1, 1));
  };

  return (
    <div className="cart-count">
      <button onClick={onAdd}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={() => handledAdd(count)}>agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
