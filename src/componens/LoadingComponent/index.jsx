import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const LoadingComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });
  return <h3>LoadingComponent: {loading ? "cargando..." : "cargo!."}</h3>;
};

export default LoadingComponent;
