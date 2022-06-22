import React from "react";

const ItemListContainer = ({ greeting, children }) => {
  return (
    <div>
      {children}
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
