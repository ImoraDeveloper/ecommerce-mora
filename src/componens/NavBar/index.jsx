import React from "react";
import CartWidget from "../CartWidget";
import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="list">
        <CartWidget />
        <li className="items">
          <Link to="/">Home</Link>
        </li>
        <li className="items">
          <Link to="/category/electronics">Electronics</Link>
        </li>

        <li className="items">
          <Link to="/category/servicios">Servicios</Link>
        </li>
        <li className="items">
          <Link to="/category/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
