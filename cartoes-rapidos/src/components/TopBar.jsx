import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopBar.css';
import LogoPP from '../images/LogoPP.png';
import { FaSignOutAlt } from 'react-icons/fa';

const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpar localStorage
    localStorage.clear();
    
    // Redirecionar para a página de login
    navigate('/');
  };

  return (
    <div className="top-bar">
      <div className="logo">
        <img src={LogoPP} alt="Logo pp"/>
      </div>
      <div>
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default TopBar;