import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  PerspectiveCamera,
  ContactShadows,
  Stars,
  Sky,
} from "@react-three/drei";

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
      <PerspectiveCamera
        makeDefault
        position={[0.6, 3, 9.5]}
        rotation={[-0.7, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 5, 5]} intensity={1} />
      <RotatingModel />
      <Text
        position={[0, -5, 5]} // Cambia la posición z para acercarlo
        fontSize={1} // Incrementa el tamaño del texto
        color="#fe0000"
        anchorX="center"
        anchorY="middle"
      >
        Water Scarcity
      </Text>
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
      <Sky sunPosition={[100, 20, 100]} />
      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.6}
        scale={8}
        blur={1.5}
        far={3.5}
      />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </Canvas>
  );
};

export default ScarcityModel;
