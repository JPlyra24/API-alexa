import React from 'react';
import TopBar from '../../components/TopBar';
import FormPergunta from '../../components/FormPergunta';
import Perguntas from '../../components/Perguntas';
import './TelaHome.css';

const TelaHome = () => {
  return (
    <div className="tela-home">
      <TopBar/>
      <h1>Seja bem vindo</h1>
      <div className="Home-content">
        <div className="form-half">
          <FormPergunta/>
        </div>
        <div className="list-half">
          <Perguntas/>
        </div>
      </div>
    </div>
  );
};

export default TelaHome;