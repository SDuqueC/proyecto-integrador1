import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="container">
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/home" className="return-button">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default Page404;
