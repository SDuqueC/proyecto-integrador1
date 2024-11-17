import React, { useRef, useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ButtonScarcity = () => {
  const buttonRef = useRef();
  const [showCard, setShowCard] = useState(false);
  const [buttonColor, setButtonColor] = useState("#FFFF00"); // Color inicial del botón

  // Evento de teclado
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        // Detecta la barra espaciadora
        setShowCard(!showCard); // Abre/cierra la tarjeta
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showCard]);

  // Animación continua para el botón
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

  const handleMouseEnter = () => {
    setButtonColor("#FF0000"); // Cambia a un color más brillante al pasar el mouse
  };

  const handleMouseLeave = () => {
    setButtonColor("#FFFF00"); // Vuelve al color original al quitar el mouse
  };

  const handleMouseClick = () => {
    setShowCard(!showCard); // Alterna la tarjeta al hacer clic
  };

  return (
    <>
      {/* Botón 3D Mejorado con eventos de mouse */}
      <mesh
        ref={buttonRef}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        onClick={handleMouseClick}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
      >
        <boxGeometry args={[2.5, 0.7, 1.2]} />
        <meshStandardMaterial
          color={buttonColor}
          roughness={0.4}
          metalness={0.7}
        />
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
          <boxGeometry args={[3.5, 2, 0.2]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} />

          {/* Texto en la tarjeta */}
          <Text
            position={[0, 0.6, 0.11]}
            fontSize={0.25}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Contaminación del Agua
          </Text>
          <Text
            position={[0, 0, 0.11]}
            fontSize={0.15}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            La contaminación del agua afecta tanto a los ecosistemas como a la
            salud humana.
          </Text>
          <Text
            position={[0, -0.5, 0.11]}
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

export default ButtonScarcity;
