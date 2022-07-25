import { addDoc, collection } from "firebase/firestore";
import React, { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import { db } from "../../firebase/config";
import ordenGenerada from "../utils/generarOrden";

const Cart = () => {
  const { cart } = useContext(Shop);

  const confirmarOrden = async () => {
    const orden = ordenGenerada("Sebas", "Calle falsa 123", cart, 1200);
    console.log(orden);
    // guardarOrden(cart, orden);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "orders"), orden);
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <ul>
      {cart.map((producto) => {
        console.log(cart);
        return (
          <div>
            <li>
              <div>
                <p>{producto.title}</p>
              </div>
              <div>
                <p>${producto.price}</p>
              </div>
              <div>
                <img src={producto.image} width="80px" alt={producto.title} />
              </div>
              <div>
                <p>Cant {producto.quantity}</p>
              </div>
              <div>
                <p>total $ {producto.price * producto.quantity}</p>
              </div>
            </li>
            <div>
              <button onClick={confirmarOrden}>Confirmar compra</button>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default Cart;
