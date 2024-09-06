import React from 'react';
import { useCallback } from 'react';
import useAuthStore from '../../stores/use-auth-store';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } =
    useAuthStore();

  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout]);

  return (
    <div>
      <h1>Welcome to My App!</h1>
      <p>This is the home page.</p>
      <button className="button-logout" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Home;
