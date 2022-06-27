import React from "react";
import ItemCount from "../../componens/ItemCount";

const ItemListContainer = ({ greeting, children }) => {
  const handledAdd = () => {
    console.log("Se agrego al carrito");
  };

  return (
    <div>
      <div>
        {children}
        <p>{greeting}</p>
      </div>
      <div>
        {" "}
        <ItemCount handledAdd={handledAdd} initialStock={5} />
      </div>
    </div>
  );
};

export default ItemListContainer;
