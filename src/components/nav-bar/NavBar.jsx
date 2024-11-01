import React from "react";
import { Link } from "react-router-dom";
import EXpatialMainLogoOnly from "../../assets/svgs/EXpatialMainLogoOnly.svg";
import github_mark from "../../assets/svgs/github_mark.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={EXpatialMainLogoOnly} alt="Logo Expatial" className="logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/home"> INICIO </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about"> ACERCA DE NOSOTROS </Link>
        </li>
        <li className="navbar-item">
          <Link to="/issues"> PROBLEMAS AMBIENTALES </Link>
        </li>
      </ul>
      <div className="navbar-icon">
        <a
          href="https://github.com/SDuqueC/proyecto-integrador1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_mark} alt="GitHub Logo" className="github-icon" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
