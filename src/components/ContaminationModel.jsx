import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";


const RotatingModelOpposite = () => {
  const modelRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.y = -elapsedTime * 0.5;
    }
  });

  const { scene } = useGLTF("/models/water_contamination_model.glb");


  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.5}
      castShadow
      receiveShadow
    />
  );
};

const ContaminationModel = () => {
  return (
    <Canvas shadows style={{ width: "100%", height: "400px" }}>
      <PerspectiveCamera
        makeDefault
        position={[0, 5, 8]}
        rotation={[-0.3, 0, 0]}
      />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} intensity={1} castShadow />
      <directionalLight position={[0, 5, 5]} intensity={0.7} castShadow />
      <RotatingModelOpposite />
      <Environment preset="forest" />
    </Canvas>
  );
};

export default ContaminationModel;