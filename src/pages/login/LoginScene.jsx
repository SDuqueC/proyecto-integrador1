import { MapControls, Environment } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import './Login.css';

const CameraController = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / innerHeight) * 2 + 1;
  };

  useFrame(() => {
    camera.rotation.y = mouse.current.x * 0.3;
    camera.rotation.x = mouse.current.y * 0.3;
  });

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return null;
};

const LoginScene = () => {
  return (
    <div className="login-scene">
      <React.Fragment>
        <Canvas>
          <CameraController />
          <MapControls />

          {/* Load the Environment using the Cubemap */}
          <Environment
            files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
            path="/cubemap/underwater/"
            background={true}
          />
        </Canvas>
      </React.Fragment>
    </div>
  );
};

export default LoginScene;
