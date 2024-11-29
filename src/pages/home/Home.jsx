import React, { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/nav-bar/NavBar";
import WaterScene from "../../components/environment/WaterScene"; // Importamos el mundo 3D
import "./Home.css";

const Home = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    navigate("/");
  }, [logout, navigate]);

  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>

      {/* Ajustamos el diseño para que la escena ocupe toda la pantalla */}
      <div className="home-content">
        {/* Aquí integramos directamente la escena 3D */}
        <div className="scene-container">
          <WaterScene />
        </div>

        <button className="button-logout" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </>
  );
};

export default Home;
