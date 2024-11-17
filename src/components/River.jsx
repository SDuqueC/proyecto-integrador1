import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, PerspectiveCamera } from "@react-three/drei";

const RiverModel = () => {
  const { scene } = useGLTF("/models/river.glb"); // Ruta al modelo GLB
  const [hoveringRiver, setHoveringRiver] = useState(false);
  const riverRef = useRef();
  const riverNoWaterRef = useRef();

  const handlePointerOver = () => {
    setHoveringRiver(true);
  };

  const handlePointerOut = () => {
    setHoveringRiver(false);
  };

  return (
    <Canvas style={{ width: "100%", height: "400px" }}>
      <PerspectiveCamera
        makeDefault
        position={[0, 5, 10]}
        rotation={[-0.7, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <primitive
        ref={riverRef}
        object={scene}
        scale={1.5}
        position={[0, -2, 0]}
        visible={!hoveringRiver}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
      {hoveringRiver && (
        <primitive
          ref={riverNoWaterRef}
          object={useGLTF("/models/no-river.glb").scene}
          scale={1.5}
          position={[0, -2, 0]}
        />
      )}
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default RiverModel;
