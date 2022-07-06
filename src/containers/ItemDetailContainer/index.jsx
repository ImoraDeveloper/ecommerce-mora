import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../componens/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();
  console.log(params);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };

    getProductos();
  }, [params]);

  return (
    <div>
      <ItemDetail product={productDetail} />
    </div>
  );
};

export default ItemDetailContainer;
