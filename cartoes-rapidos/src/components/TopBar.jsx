import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
import LogoPP from '../images/LogoPP.png'
import { FaSignOutAlt } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <img src={LogoPP} alt="Logo pp"/>
      </div>
      <div>
        <Link to="/" className="logout-button">
            <FaSignOutAlt/>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;