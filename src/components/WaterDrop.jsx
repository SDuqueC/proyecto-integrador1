import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const RotatingMesh = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = elapsedTime * 0.4;
      meshRef.current.rotation.y = elapsedTime * 0.6;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#5dade2"
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const WaterDrop = () => {
  return (
    <Canvas shadows style={{ height: "100vh", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={1} castShadow />
      <RotatingMesh />
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default WaterDrop;
