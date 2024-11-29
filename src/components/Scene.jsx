import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Ground from "./Ground";
import Box from "./Box";
import Sphere from "./Sphere";

const Scene = () => {
  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
      {/* Luz ambiental y direccional */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      {/* Controles para mover la cámara */}
      <OrbitControls />

      {/* Configuración de físicas */}
      <Physics>
        <Ground />
        <Box position={[0, 2, 0]} />
        <Sphere position={[1, 5, 0]} />
      </Physics>
    </Canvas>
  );
};

export default Scene;
