import React, { useState } from 'react';
import axios from 'axios';
import './FormPergunta.css'

const FormPergunta = () => {
  const [perguntaData, setPerguntaData] = useState({
    nome: '',
    pergunta: '',
    resposta: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerguntaData({ ...perguntaData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await axios.post('http://localhost:8081/quiz', perguntaData);
      console.log('Pergunta cadastrada com sucesso!');

      
      setPerguntaData({ nome: '', pergunta: '', resposta: '' });
    } catch (error) {
      console.error('Erro ao cadastrar pergunta:', error);
      
    }
  };

  return (
    <div>
      <h2>Formulário de Perguntas</h2>
      <form onSubmit={handleSubmit} >
        <label>
          Tema:
          <input
            type="text"
            name="Tag"
            value={perguntaData.nome}
            onChange={handleChange}
            className='pergunta-input'
          />
        </label>
        <label>
          Pergunta:
          <input
            type="text"
            name="pergunta"
            value={perguntaData.pergunta}
            onChange={handleChange}
            className='pergunta-input'
          />
        </label>
        <label>
          Resposta:
          <input
            type="text"
            name="resposta"
            value={perguntaData.resposta}
            onChange={handleChange}
            className='pergunta-input'
          />
        </label>
        <button type="submit" className='pergunta-button'>Adicionar Pergunta</button>
      </form>
    </div>
  );
};

export default FormPergunta;