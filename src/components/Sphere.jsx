// src/components/Sphere.jsx
import React, { useEffect } from "react";
import { useSphere } from "@react-three/cannon";

const Sphere = () => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [2, 5, 0],
  }));

  useEffect(() => {
    api.applyForce([0, 0, -10], [0, 0, 0]);
  }, [api]);

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#5dade2" />
    </mesh>
  );
};

export default Sphere;
