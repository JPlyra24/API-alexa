import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaLogin } from "./pages/Login/TelaLogin";
import { Cadastro } from "./pages/Cadastro/Cadastro";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default App;
