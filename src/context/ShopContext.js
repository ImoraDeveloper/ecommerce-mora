import React, { createContext, useState } from "react";

export const Shop = createContext();

const ShopProvider = ({ children }) => {
  const [estadoA, setEstadoA] = useState("Valor por defecto");

  const [cart, setCart] = useState([]);

  const [suma, setSuma] = useState([]);

  //Agregar un item al carrito, acorde a la cantidad
  const addItem = (producto, cantidad) => {
    console.log(producto, cantidad);
    const productoRepetido = isInCart(producto);
    console.log(productoRepetido);
    if (productoRepetido) {
      productoRepetido.quantity += cantidad;
      setCart([...cart]);
    } else {
      //Es útil cuando el producto no está presente en el carrito
      setCart([...cart, { ...producto, quantity: cantidad }]);
    }
  };

  const sumando = (id) => {
    const productosSumados = cart.filter(
      (producto) => producto.quantity * producto.price
    );
    setSuma(productosSumados);
  };
  const removeItem = (id) => {
    const productosFiltrados = cart.filter((producto) => producto.id !== id);
    setCart(productosFiltrados);
  };

  const isInCart = (producto) => {
    return cart.find((elemento) => elemento.id === producto.id);
  };

  return (
    <Shop.Provider
      value={{
        estadoA,
        setEstadoA,
        addItem,
        removeItem,
        suma,
        setSuma,
        sumando,
        cart,
      }}
    >
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
