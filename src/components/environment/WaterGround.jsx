import React from "react";
import { usePlane } from "@react-three/cannon";

const WaterGround = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // Plano horizontal
    position: [0, -1, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#87CEFA" transparent opacity={0.7} />
    </mesh>
  );
};

export default WaterGround;
