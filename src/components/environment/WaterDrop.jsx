import React from "react";
import { useSphere } from "@react-three/cannon";

const WaterDrop = ({ position }) => {
  const [ref] = useSphere(() => ({
    mass: 0.5, // Masa baja, simula algo ligero
    position,
  }));

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#00BFFF" transparent opacity={0.9} />
    </mesh>
  );
};

export default WaterDrop;
