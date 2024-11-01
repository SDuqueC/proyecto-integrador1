import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const RotatingMesh = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    meshRef.current.rotation.x = elapsedTime * 0.4;
    meshRef.current.rotation.y = elapsedTime * 0.6;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial color="#7ec8e3" roughness={0.2} metalness={0.5} />
    </mesh>
  );
};

const WaterDrop = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <RotatingMesh />
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default WaterDrop;
