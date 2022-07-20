import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../componens/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();
  console.log(params);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  useEffect(() => {
    const getProductos = async () => {
      try {
        //se llama a la referencia del documento
        //se importa db con control + space 2do parametro es la coleccion
        // 3er parametro id de un producto de referencia
        const docRef = doc(db, "products", params.productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap);
          console.log("Document data:", docSnap.data());
          const productDetail = { id: docSnap.id, ...docSnap.data() };
          setProductDetail(productDetail);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

        // const response = await fetch(
        //   `https://fakestoreapi.com/products/${params.productId}`
        // );
        // const data = await response.json();
        // setProductDetail(data);
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
