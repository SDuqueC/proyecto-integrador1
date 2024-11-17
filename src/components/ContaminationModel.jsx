import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, PerspectiveCamera, ContactShadows } from "@react-three/drei";

const RotatingModelOpposite = () => {
  const modelRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    modelRef.current.rotation.y = -elapsedTime * 0.5;
  });

  const { scene } = useGLTF("/models/water_contamination_model.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.5} />;
};

const ContaminationModel = () => {
  return (
    <Canvas style={{ width: "100%", height: "400px" }} shadows>
      <PerspectiveCamera makeDefault position={[0, 5, 8]} rotation={[-0.3, 0, 0]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} castShadow  />
      <RotatingModelOpposite />
      <Environment preset="forest" />
      <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={2.5} far={15.5} />
      {/* <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.3} />
      </mesh> */}
    </Canvas>
  );
};

export default ContaminationModel;