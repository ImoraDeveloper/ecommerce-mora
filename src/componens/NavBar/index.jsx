import React from "react";
import CartWidget from "../CartWidget";
import "./style.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";

const NavBar = () => {
  const { estadoA } = useContext(Shop);

  console.log(estadoA);

  return (
    <nav>
      <ul className="list">
        <CartWidget />
        <li className="items">
          <Link to="/">Home</Link>
        </li>
        <li className="items">
          <Link to="/category/almacenamiento">Almacenamiento</Link>
        </li>

        <li className="items">
          <Link to="/category/pantallas">Pantallas</Link>
        </li>
        <li className="items">
          <Link to="/category/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
