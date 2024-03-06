/*import React, { useState, useEffect } from 'react';
import api from '../services/api';
import CardPergunta from './CardPergunta';
import './Perguntas.css';

const Perguntas = () => {
  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => {
    const fetchPerguntas = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/quiz/{id}', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPerguntas(response.data);
      } catch (error) {
        console.error('Erro ao recuperar perguntas existentes:', error);
      }
    };

    fetchPerguntas();
  }, []);

  return (
    <div className="perguntas-existentes">
      <h2>Meus Cartões</h2>
      <div className="cards-container">
        {perguntas.map((pergunta) => (
          <CardPergunta key={pergunta.idPergunta} pergunta={pergunta} />
        ))}
      </div>
    </div>
  );
};

export default Perguntas; */

import React from 'react';
import CardPergunta from './CardPergunta';
import './Perguntas.css';

const Perguntas = () => {
  // Exemplo de dados fixos
  const perguntas = [
    {
      id: 1,
      nome: 'Geografia',
      pergunta: 'Qual é a capital do Brasil?',
      resposta: 'Brasília',
    },
    {
      id: 2,
      nome: 'Artes',
      pergunta: 'Qual é a cor do céu?',
      resposta: 'Azul',
    },
    {
      id: 2,
      nome: 'Artes',
      pergunta: 'Qual é a cor do céu?',
      resposta: 'Azul',
    },
    
  ];

  return (
    <div className="perguntas-existentes">
      <h2>Meus cartões</h2>
      <div className="cards-container">
        {perguntas.map((pergunta) => (
          <CardPergunta
            key={pergunta.id}
            nome={pergunta.nome}
            pergunta={pergunta.pergunta}
            resposta={pergunta.resposta}
          />
        ))}
      </div>
    </div>
  );
};

export default Perguntas;