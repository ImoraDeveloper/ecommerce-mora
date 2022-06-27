import React, { useState } from "react";

const ItemCount = ({ handledAdd, initialStock }) => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(Math.min(count + 1, initialStock));
  };

  const onDecrement = () => {
    setCount(Math.max(count - 1, 0));
  };

  return (
    <div>
      <div>
        <p>{count}</p>
        {count}
      </div>
      <button onClick={onAdd}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={handledAdd}>agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
