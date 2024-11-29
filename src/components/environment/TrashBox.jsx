import React from "react";
import { useBox } from "@react-three/cannon";

const TrashBox = ({ position }) => {
  const [ref] = useBox(() => ({
    mass: 1,
    position,
  }));

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8B0000" />
    </mesh>
  );
};

export default TrashBox;
