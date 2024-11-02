import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

const ContaminationModel = () => {
  const { scene } = useGLTF("/models/water_contamination_model.glb"); // Asegúrate de que el path es correcto

  return (
    <Canvas style={{ width: "100%", height: "400px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <primitive object={scene} scale={0.5} />
      <Environment preset="forest" />
    </Canvas>
  );
};

export default ContaminationModel;
