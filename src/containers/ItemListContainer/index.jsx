import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import ItemCount from "../../componens/ItemCount";
import ItemList from "../../componens/ItemList";

const ItemListContainer = ({ greeting, children }) => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        console.log(data);
        setProductos(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    };

    getProductos();
  }, []);

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(
        (producto) => producto.category === params.categoryId
      );
      setProductosFiltrados(productosFiltrados);
    } else {
      setProductosFiltrados(productos);
    }
  }, [params, productos]);

  // //esta es una forma de hacer el category no tan optimizada pero funciona
  //   useEffect(() => {
  //     const getProductos = async () => {
  //       try {
  //         const response = await fetch("https://fakestoreapi.com/products/");
  //         const data = await response.json();
  //         console.log(data);
  //         let productosFiltrados = [...data];
  //         if (params?.categoryId) {
  //           productosFiltrados = productosFiltrados.filter(
  //             (producto) => producto.category === params.categoryId
  //           );
  //         }
  //         setProductos(productosFiltrados);
  //       } catch (error) {
  //         console.log("Hubo un error:");
  //         console.log(error);
  //       }
  //     };

  //     getProductos();
  //   }, [params]);

  // const handledAdd = (count) => {
  //   console.log(`Se agrego al carrito ${count} Productos`);
  // };
  console.log(productos);
  return (
    <div>
      <div>
        {children}
        <p>{greeting}</p>
        {productos ? <ItemList products={productosFiltrados} /> : null}
      </div>
      <div> {/* <ItemCount handledAdd={handledAdd} totalStock={5} /> */}</div>
    </div>
  );
};

export default ItemListContainer;
