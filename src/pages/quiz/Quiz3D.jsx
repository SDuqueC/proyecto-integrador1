import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Sky, useGLTF } from "@react-three/drei";
import Navbar from "../../components/nav-bar/NavBar";
import "./Quiz3D.css";

const Quiz3D = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [reward, setReward] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Respuestas seleccionadas
  const [trophies, setTrophies] = useState([]); // Trofeos en pantalla

  const questions = [
    {
      topic: "Contaminación del agua",
      description:
        "Selecciona los objetos que representan fuentes de contaminación del agua.",
      interactiveElements: [
        { id: 1, position: [-2, 1, 0], isCorrect: true, label: "Fábrica" },
        { id: 2, position: [0, 1, 0], isCorrect: false, label: "Árbol" },
        { id: 3, position: [2, 1, 0], isCorrect: true, label: "Vertedero" },
      ],
    },
    {
      topic: "Escasez del agua",
      description:
        "Selecciona los objetos que representan soluciones para la escasez de agua.",
      interactiveElements: [
        {
          id: 4,
          position: [-2, 1, 0],
          isCorrect: true,
          label: "riego",
        },
        { id: 5, position: [0, 1, 0], isCorrect: true, label: "Purificador" },
        {
          id: 6,
          position: [2, 1, 0],
          isCorrect: false,
          label: "Fuente",
        },
      ],
    },
  ];

  const handleInteraction = (element) => {
    if (selectedAnswers.includes(element.id)) {
      setFeedback("Ya seleccionaste esta respuesta.");
      return;
    }

    setSelectedAnswers((prev) => [...prev, element.id]);

    if (element.isCorrect) {
      setScore((prevScore) => prevScore + 10);
      setFeedback("¡Correcto! Has ganado 10 puntos.");

      // Agregar trofeo si no existe ya
      setTrophies((prev) =>
        prev.some((trophy) => trophy.id === element.id)
          ? prev
          : [
              ...prev,
              {
                id: element.id,
                position: [element.position[0], 2, element.position[2]],
              },
            ]
      );
    } else {
      setFeedback("Respuesta incorrecta. Intenta de nuevo.");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setFeedback("");
      setReward("");
      setSelectedAnswers([]);
      setTrophies([]);
    } else {
      alert(`Quiz finalizado. Puntuación total: ${score}`);
    }
  };

  // Componente para cargar un modelo 3D
  const TrayModel = () => {
    const { scene } = useGLTF("/public/models/tray.glb"); // Cambia la ruta según el modelo descargado
    return <primitive object={scene} scale={5.5} position={[4, -1.3, 0]} />;
  };

  // Componente para cargar un modelo 3D
  const TrophyModel = () => {
    const { scene } = useGLTF("/public/models/trophy.glb"); // Cambia la ruta según el modelo descargado
    return <primitive object={scene} scale={0.2} position={[6, -3, 0]} />;
  };

  // Componente para cargar un modelo 3D
  const WaterModel = () => {
    const { scene } = useGLTF("/public/models/water.glb"); // Cambia la ruta según el modelo descargado
    return <primitive object={scene} scale={0.5} />;
  };

  // Componente para cargar un modelo 3D
  const FactoryModel = () => {
    const { scene } = useGLTF("/public/models/factory.glb"); // Cambia la ruta según el modelo descargado
    return <primitive object={scene} scale={0.8} position={[0, -1.1, 0]} />;
  };

  // Componente para cargar un modelo 3D
  const TreeModel = () => {
    const { scene } = useGLTF("/public/models/tree.glb"); // Cambia la ruta según el modelo descargado
    return <primitive object={scene} scale={0.05} position={[0, -1.3, 0]} />;
  };

  // Componente para cargar un modelo 3D
  const DumpModel = () => {
    const { scene } = useGLTF("/public/models/dump.glb"); // Cambia la ruta según el modelo descargado
    return <primitive object={scene} scale={0.0009} position={[0, -1.1, 0]} />;
  };

  // Componente para cargar un modelo 3D
  const HoseModel = () => {
    const { scene } = useGLTF("/public/models/hose.glb"); // Cambia la ruta según el modelo descargado
    return <primitive object={scene} scale={0.3} position={[0, -1.2, -2]} />;
  };

  // Componente para cargar un modelo 3D
  const PurifierModel = () => {
    const { scene } = useGLTF("/public/models/purifier.glb");
    return (
      <primitive
        object={scene}
        scale={0.4}
        rotation={[0, Math.PI, 0]}
        position={[0, -1.2, 0]}
      />
    );
  };

  // Componente para cargar un modelo 3D
  const FountainModel = () => {
    const { scene } = useGLTF("/public/models/fountain.glb"); // Cambia la ruta según el modelo descargado
    return <primitive object={scene} scale={0.1} position={[0, -1.2, 0]} />;
  };

  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
          {/* Entorno */}
          <ambientLight intensity={1.4} />
          <directionalLight position={[2, 5, 2]} castShadow intensity={1} />
          <Sky sunPosition={[100, 20, 100]} turbidity={10} />
          <OrbitControls enableZoom={false} />

          {/* Modelo de agua */}
          <WaterModel />

          {/* Texto de preguntas y puntuación */}
          <Text
            position={[0, 3.8, 0.2]}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {questions[currentQuestion].topic}
          </Text>
          <Text
            position={[0, 3, 0.2]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {questions[currentQuestion].description}
          </Text>
          <Text
            position={[0, -2.5, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Puntuación: {score}
          </Text>
          <Text
            position={[0, -2, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {feedback}
          </Text>
          <Text
            position={[4, -1.5, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {reward}
          </Text>

          {/* Botón siguiente pregunta */}
          <group position={[0, -3, 0]} onClick={handleNextQuestion}>
            <Text
              fontSize={0.4}
              color="yellow"
              anchorX="center"
              anchorY="middle"
            >
              Siguiente Pregunta
            </Text>
          </group>

          {/* Elementos interactivos */}
          {questions[currentQuestion].interactiveElements.map((element) => (
            <group
              key={element.id}
              position={element.position}
              onClick={() => handleInteraction(element)}
            >
              {element.label === "Fábrica" && <FactoryModel />}
              {element.label === "Árbol" && <TreeModel />}
              {element.label === "Vertedero" && <DumpModel />}
              {element.label === "riego" && <HoseModel />}
              {element.label === "Purificador" && <PurifierModel />}
              {element.label === "Fuente" && <FountainModel />}
              <Text
                position={[0, 0.5, 0]}
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {element.label}
              </Text>
            </group>
          ))}

          {/* Trofeos */}
          {trophies.map((trophy) => (
            <group key={trophy.id} position={trophy.position}>
              <TrophyModel />
            </group>
          ))}

          {/* Modelo de la cubeta */}
          <TrayModel />
        </Canvas>
      </div>
    </>
  );
};

export default Quiz3D;
