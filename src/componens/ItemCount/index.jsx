import React, { useState } from "react";

const ItemCount = ({ handledAdd, totalStock }) => {
  const [count, setCount] = useState(1);

  const onAdd = () => {
    setCount(Math.min(count + 1, totalStock));
  };

  const onDecrement = () => {
    setCount(Math.max(count - 1, 1));
  };

  return (
    <div>
      <div>
        <p>{count}</p>
        {count}
      </div>
      <button onClick={onAdd}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={() => handledAdd(count)}>agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
