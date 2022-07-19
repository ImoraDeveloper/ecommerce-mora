import React from "react";
import "./style.css";

const TitleStyleOpcionales = ({ title, styles }) => {
  return (
    <h2 style={{ ...styles }} className="title">
      {title}
    </h2>
  );
};

export default TitleStyleOpcionales;
