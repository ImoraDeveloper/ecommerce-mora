import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../componens/ItemDetail";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/1");
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };

    getProductos();
  }, []);

  return (
    <div>
      <ItemDetail product={productDetail} />
    </div>
  );
};

export default ItemDetailContainer;
