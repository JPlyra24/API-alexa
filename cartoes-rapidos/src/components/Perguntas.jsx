import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Perguntas = () => {
  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => {
    
    const carregarPerguntas = async () => {
      try {
        const response = await axios.get('http://localhost:8081/quiz');
        setPerguntas(response.data);
      } catch (error) {
        console.error('Erro ao carregar perguntas:', error);
        
      }
    };

    carregarPerguntas();
  }, []);

  return (
    <div>
      <h2>Perguntas Existentes</h2>
      <ul>
        {perguntas.map((pergunta) => (
          <li key={pergunta.idPergunta}>
            <strong>{pergunta.nome}:</strong> {pergunta.pergunta}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Perguntas;