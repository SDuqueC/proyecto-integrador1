// src/components/Ground.jsx
import React from "react";
import { usePlane } from "@react-three/cannon";

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -2, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#228B22" />
    </mesh>
  );
};

export default Ground;
