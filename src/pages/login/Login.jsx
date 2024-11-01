import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import useAuthStore from '../../stores/use-auth-store';
import EXpatialMainLogoOnly from '../../assets/svgs/EXpatialMainLogoOnly.svg';
import WaterDrop from '../../components/WaterDrop';
import LoginScene from './LoginScene';
import './Login.css';

const Login = () => {
  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } =
    useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      const saveUserToFirestore = async () => {
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(
          userDocRef,
          {
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
            lastLogin: new Date(),
          },
          { merge: true }
        );
      };

      saveUserToFirestore();
      navigate('/home');
    }
  }, [user, navigate]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div className="login-container">
      <LoginScene />
      <div className="card-login">
        <div className="left-section">
          <WaterDrop />
        </div>
        <div className="right-section">
          <img className="logo" src={EXpatialMainLogoOnly} alt="EXpatial" />
          {user ? (
            <>
              <p className="welcome-text">Bienvenido, {user.displayName}</p>
              <button className="button" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <h1 className="welcome-text">BIENVENIDO</h1>
              <h2 className="login-prompt">Inicia sesión</h2>
              <button className="button" onClick={handleLogin}>
                Iniciar sesión con Google
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
