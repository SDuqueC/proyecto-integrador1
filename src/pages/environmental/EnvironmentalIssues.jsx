import React from "react";
import Navbar from "../../components/nav-bar/NavBar";
import ScarcityModel from "../../components/ScarcityModel";
import ContaminationModel from "../../components/ContaminationModel";
import RiverModel from "../../components/River";
import RiverNoWater from "../../components/RiverNoWater";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ButtonScarcity from "../../components/ButtonScarcity";
import ButtonContamination from "../../components/ButtonContamination"; // Importa el botón
import "./EnvironmentalIssues.css";
import Navbar from "../../components/nav-bar/NavBar";
import SceneEnvironment from "../../components/SceneEnvironment"; // Asegúrate de importar


const EnvironmentalIssues = () => {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="environmental-issues">
        <h1>Environmental Issues</h1>
        <div className="issues-container">
          <div className="issue">
            <ScarcityModel />
            <div className="issue-description">
              <h2>Water Scarcity</h2>
              <p>
                This section focuses on the challenges related to water
                scarcity, explaining its causes and effects.
              </p>
              <div className="issue">
                <Canvas
                  shadows
                  style={{
                    height: "300px", // Ajusta el tamaño según necesites
                  }}
                >
                  <ambientLight intensity={0.4} />
                  <directionalLight
                    position={[2, 5, 2]}
                    castShadow
                    intensity={1}
                  />
                  <OrbitControls enableZoom={false} />{" "}
                  {/* Para rotar la vista */}
                  <ButtonScarcity />
                </Canvas>
              </div>
            </div>
          </div>
          <div className="issue">
            <ContaminationModel />
            <div className="issue-description">
              <h2>Water Contamination</h2>
              <p>
                This section highlights issues surrounding water contamination
                and its impact on ecosystems and human health.
              </p>
            </div>
            <div className="issue">
              <Canvas
                shadows
                style={{
                  height: "300px", // Ajusta el tamaño según necesites
                }}
              >
                <ambientLight intensity={0.4} />
                <directionalLight
                  position={[2, 5, 2]}
                  castShadow
                  intensity={1}
                />
                <OrbitControls enableZoom={false} /> {/* Para rotar la vista */}
                <ButtonContamination />
              </Canvas>
            </div>
          </div>
          <div className="issue">
            <RiverModel />
          </div>
          <div className="issue">
            <RiverNoWater />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnvironmentalIssues;
