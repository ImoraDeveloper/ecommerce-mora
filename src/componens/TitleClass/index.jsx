import React from "react";
import "./style.css";

const TitleClass = ({ type = "importante", title }) => {
  return (
    <h2 className={type === "importante" ? "importante" : "no-importante"}>
      {title}
    </h2>
  );
};

export default TitleClass;
