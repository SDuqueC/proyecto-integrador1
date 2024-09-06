import React, { useCallback } from 'react';
import useAuthStore from '../../stores/use-auth-store';
import { useNavigate } from 'react-router-dom';
import ThreeScene from './ThreeScene';

const Home = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  return (
    <div>
      <h1>Welcome to My App!</h1>
      <p>This is the home page.</p>

      <ThreeScene />

      <button className="button-logout" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default Home;