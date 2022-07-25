import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import ItemCount from "../../componens/ItemCount";
import ItemList from "../../componens/ItemList";
import ModalConEscape from "../../componens/ModalConEscape";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
// import algoritmoGuardadoAutomático from "../utils/guardarProdctos";

const ItemListContainer = ({ greeting, children }) => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    const getProductos = async () => {
      try {
        // //esto sirve para copiar el json al firebase
        // //se utiliza la funcion guardar productos
        // algoritmoGuardadoAutomático();

        //lo que esta encerado aqui es la forma de traer de firebase

        //
        const q = query(collection(db, "products"));

        const querySnapshot = await getDocs(q);
        const productos = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          productos.push({ id: doc.id, ...doc.data() });
        });
        console.log();
        console.log(productos);
        setProductos(productos);
        setProductosFiltrados(productos);
        //
        //hasta aqui es lo de firebase

        //
        // se comenta fech ya que estamos usando firebase
        // const response = await fetch("https://fakestoreapi.com/products/");
        // const data = await response.json();
        // console.log(data);
        // setProductos(data);
        // setProductosFiltrados(data);
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
        <div>
          {true
            ? modalVisible && <ModalConEscape handleClose={setModalVisible} />
            : []}
        </div>
      </div>
      <div> {/* <ItemCount handledAdd={handledAdd} totalStock={5} /> */}</div>
    </div>
  );
};

export default ItemListContainer;
