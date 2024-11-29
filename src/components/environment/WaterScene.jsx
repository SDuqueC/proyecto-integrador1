import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier"; // Cambiado de useSphere a RigidBody

// Componente para simular gotas flotantes
const FloatingDrop = ({ position }) => {
  return (
    <RigidBody position={position} colliders="ball">
      <mesh castShadow>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#4f83cc" metalness={0.8} roughness={0.2} />
      </mesh>
    </RigidBody>
  );
};

// Componente del lago
const WaterSurface = () => {
  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial
        color="#4f83cc"
        metalness={0.7}
        roughness={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

// Escena principal
const WaterScene = () => {
  return (
    <Canvas shadows style={{ height: "100%", width: "100%" }}>
      {/* Luces para ambientación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

      {/* Fondo dinámico */}
      <Environment preset="sunset" background />

      {/* Física y elementos */}
      <Physics>
        {/* Lago */}
        <WaterSurface />

        {/* Varias gotas flotando */}
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingDrop
            key={i}
            position={[
              (Math.random() - 0.5) * 20,
              Math.random() * 5 + 1,
              (Math.random() - 0.5) * 20,
            ]}
          />
        ))}
      </Physics>

      {/* Controles */}
      <OrbitControls enableZoom={true} />
      <Stars radius={100} depth={50} count={5000} factor={4} />
    </Canvas>
  );
};

export default WaterScene;
