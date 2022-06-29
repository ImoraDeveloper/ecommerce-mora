import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "../../componens/ItemCount";
import ItemList from "../../componens/ItemList";

const ItemListContainer = ({ greeting, children }) => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch("/mocks/data.json");
        const data = await response.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    };

    getProductos();
  }, []);

  const handledAdd = (count) => {
    console.log(`Se agrego al carrito ${count} Productos`);
  };
  console.log(productos);
  return (
    <div>
      <div>
        {children}
        <p>{greeting}</p>
        {productos ? <ItemList products={productos} /> : null}
      </div>
      <div>
        {" "}
        <ItemCount handledAdd={handledAdd} totalStock={5} />
      </div>
    </div>
  );
};

export default ItemListContainer;
