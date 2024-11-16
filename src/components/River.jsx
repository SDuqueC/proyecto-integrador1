import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, PerspectiveCamera } from "@react-three/drei";

const River = () => {
  const { scene } = useGLTF("/models/river.glb"); // Ruta al modelo GLB

  return (
    <Canvas style={{ width: "100%", height: "400px" }}>
      <PerspectiveCamera
        makeDefault
        position={[0, 5, 8]}
        rotation={[-0.3, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <primitive object={scene} scale={1.5} position={[0, -2, 0]} />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default River;
