import React from "react";

const Title = ({ type = "importante", title }) => {
  return (
    <h2
      style={{
        fontSize: type === "importante" ? 32 : 32,
      }}
    >
      {title}
    </h2>
  );
};

export default Title;
