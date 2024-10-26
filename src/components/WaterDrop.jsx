import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Mesh } from "three";

const WaterDrop = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <mesh>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#7ec8e3" roughness={0.2} metalness={0.5} />
      </mesh>
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default WaterDrop;
