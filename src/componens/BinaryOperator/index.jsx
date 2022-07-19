import React from "react";

const BinaryOperator = ({ condition }) => {
  return (
    <>
      {condition && <p>BinaryOperator</p>}
      {!condition && <p>No hay BinaryOperator</p>}
    </>
  );
};

export default BinaryOperator;
