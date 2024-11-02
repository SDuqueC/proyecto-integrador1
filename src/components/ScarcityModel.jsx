import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, PerspectiveCamera } from "@react-three/drei";

const RotatingModel = () => {
  const modelRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    modelRef.current.rotation.y = elapsedTime * 0.5;
  });

  const { scene } = useGLTF("/models/water_scarcity_model.glb");

  return <primitive ref={modelRef} object={scene} scale={0.5} />;
};

const ScarcityModel = () => {
  return (
    <Canvas style={{ width: "100%", height: "400px" }}>
      <PerspectiveCamera makeDefault position={[0.5, 3, 10]} rotation={[-0.6,0,0]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <RotatingModel />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default ScarcityModel;
