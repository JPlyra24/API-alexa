import React, { useState, useEffect } from 'react';
import TopBar from '../../components/TopBar';
import FormPergunta from '../../components/FormPergunta';
import Perguntas from '../../components/Perguntas';
import api from '../../services/api';
import './TelaHome.css';

const TelaHome = () => {
  const [userInfo, setUserInfo] = useState({
    nome: '',
    id: '',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/usuario/{id}', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo({
          nome: response.data.nome,
          id: response.data.idUsuario,
        });
      } catch (error) {
        console.error('Erro ao recuperar informações do usuário:', error);
      }
    };

    fetchUserInfo();
  }, []);


  return (
    <div className="tela-home">
      <TopBar/>
      <div className="bem-vindo">
        Bem-vindo aos seus Cartões Rápidos, {userInfo.nome}! Seu ID é {userInfo.id}.
      </div>
      <div className="Home-content">
        <div className="form-half">
          <FormPergunta/>
        </div>
        <div class="divisao-vertical"></div>
        <div className="list-half">
          <Perguntas/>
        </div>
      </div>
    </div>
  );
};

export default TelaHome;