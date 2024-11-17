import React from "react";
import { Stars } from "@react-three/drei";

const SceneEnvironment = () => {
  return (
    <>
      {/* Luz ambiental suave */}
      <ambientLight intensity={0.4} />
      {/* Luz direccional para simular el sol */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* Estrellas (opcional para la noche) */}
      <Stars
        radius={50}
        depth={10}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      {/* Fondo del cielo */}
      <color attach="background" args={["#87CEEB"]} /> {/* Cielo azul claro */}
    </>
  );
};

export default SceneEnvironment;
