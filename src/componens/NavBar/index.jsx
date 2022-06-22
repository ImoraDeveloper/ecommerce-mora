import React from "react";
import CartWidget from "../CartWidget";
import "./style.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="list">
        <CartWidget />
        <li className="items">Home</li>
        <li className="items">Services</li>
        <li className="items">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
