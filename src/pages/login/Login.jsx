// import './Login.css';
// import { useCallback, useEffect } from 'react';
// import useAuthStore from '../../stores/use-auth-store';
// import UserDAO from '../../daos/UserDAO';
// import { useNavigate } from 'react-router-dom';

import EXpatialMainLogoOnly from '../../assets/svgs/EXpatialMainLogoOnly.svg';
// import { BsGoogle } from "react-icons/bs";
import './Login.css';
import { useCallback, useEffect } from 'react';
import useAuthStore from '../../stores/use-auth-store';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase.config';

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
    <div className="container-login">
      <div className="card">
        <img className="logo" src={EXpatialMainLogoOnly} alt="EXpatial" />
        {user ? (
          <>
            <p className="welcome-text">Bienvenido, {user.displayName}</p>
            <button className="button-logout" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <button onClick={handleLogin}>Iniciar sesión</button>
        )}
      </div>
    </div>
  );
};

export default Login;
