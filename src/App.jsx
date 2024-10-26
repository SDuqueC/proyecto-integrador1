import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/environmental-issues">Environmental Issues</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
