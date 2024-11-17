import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, PerspectiveCamera, ContactShadows } from "@react-three/drei";

const RotatingModel = () => {
  const modelRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    modelRef.current.rotation.y = elapsedTime * 0.5;
  });

  const { scene } = useGLTF("/models/water_scarcity_model.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.5} />;
};

const ScarcityModel = () => {
  return (
    <Canvas style={{ width: "100%", height: "400px" }} shadows>
      <PerspectiveCamera makeDefault position={[0.5, 3, 10]} rotation={[-0.6, 0, 0]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <RotatingModel />
      <Environment preset="sunset" />
      <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={8} blur={1.5} far={6.5} />
    </Canvas>
  );
};

export default ScarcityModel;
