// src/components/Box.jsx
import React from "react";
import { useBox } from "@react-three/cannon";

const Box = () => {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 3, 0],
  }));

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FF5733" />
    </mesh>
  );
};

export default Box;
