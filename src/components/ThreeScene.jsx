import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { FlyControls } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { DirectionalLight } from "three";

const AnimatedObject = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.y = Math.cos(t) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <MeshDistortMaterial color="white" speed={1} distort={0.3} />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <primitive
        object={new DirectionalLight(0xffffff, 1.5)}
        position={[5, 5, 5]}
      />
      <AnimatedObject />
      <FlyControls
        movementSpeed={2}
        rollSpeed={0.5}
        autoForward={false}
        dragToLook={true}
      />
    </Canvas>
  );
};

export default ThreeScene;
