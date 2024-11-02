import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

const ScarcityModel = () => {
  const { scene } = useGLTF("/models/water_scarcity_model.glb");

  return (
    <Canvas position={[5, -5, 5]} style={{ width: "100%", height: "400px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <primitive object={scene} scale={0.5} />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default ScarcityModel;
