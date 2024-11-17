import React, { useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ButtonContamination = () => {
  const buttonRef = useRef();
  const [showCard, setShowCard] = useState(false);

  useFrame(({ clock }) => {
    if (buttonRef.current) {
      const elapsedTime = clock.getElapsedTime();
      buttonRef.current.rotation.y = Math.sin(elapsedTime) * 0.4;
      buttonRef.current.scale.set(
        1 + Math.sin(elapsedTime) * 0.05,
        1 + Math.sin(elapsedTime) * 0.05,
        1
      );
    }
  });

  const handleButtonClick = () => {
    setShowCard(!showCard);
  };

  return (
    <>
      {/* Botón 3D Mejorado */}
      <mesh
        ref={buttonRef}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        onClick={handleButtonClick}
      >
        <boxGeometry args={[2.5, 0.7, 1.2]} /> {/* Más ancho y redondeado */}
        <meshStandardMaterial color="#ff8800" roughness={0.4} metalness={0.7} />
        {/* Texto del botón */}
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          ¡Presiona!
        </Text>
      </mesh>

      {/* Tarjeta de Información */}
      {showCard && (
        <mesh position={[0, -1.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[15, 2, 0.2]} /> {/* Forma de tarjeta */}
          <meshStandardMaterial color="#ffffff" roughness={0.1} />
          {/* Texto en la tarjeta */}
          <Text
            position={[0, 0.6, 0.11]} // Ajuste para centrar dentro de la tarjeta
            fontSize={0.25}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Contaminación del Agua
          </Text>
          <Text
            position={[0, 0, 0.11]} // Línea debajo del título
            fontSize={0.15}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            La contaminación del agua afecta tanto a los ecosistemas como a la
            salud humana.
          </Text>
          <Text
            position={[0, -0.5, 0.11]} // Línea extra para más info
            fontSize={0.15}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            ¡Cuidemos el agua, es esencial para la vida!
          </Text>
        </mesh>
      )}
    </>
  );
};

export default ButtonContamination;
