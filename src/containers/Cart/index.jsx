import React, { useContext } from "react";
import { Shop } from "../../context/ShopContext";

const Cart = () => {
  const { cart } = useContext(Shop);
  const suma = cart;
  console.log(suma);

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
          </div>
        );
      })}
    </ul>
  );
};

export default Cart;
