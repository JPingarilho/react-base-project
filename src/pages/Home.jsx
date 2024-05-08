import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";

import React, { useState } from 'react';
import './relatorio.css'; 

const App = () => {
  const [nomePaciente, setNomePaciente] = useState('');
  const [tipoRelatorio, setTipoRelatorio] = useState('');
  const [relatorio, setRelatorio] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nomePaciente', nomePaciente);
    formData.append('tipoRelatorio', tipoRelatorio);
    formData.append('relatorio', relatorio);

  };

  return (
    <div className="form-container">
      <h1>Anexar Relatório Médico</h1>

      <form onSubmit={handleSubmit}>
        <div className="label">Nome do Paciente:</div>
        <input type="text" className="input" value={nomePaciente} onChange={(e) => setNomePaciente(e.target.value)} />

        <div className="label">Tipo de Relatório:</div>
        <select className="input" value={tipoRelatorio} onChange={(e) => setTipoRelatorio(e.target.value)}>
          <option value="">Selecione</option>
          <option value="exames">Exames</option>
          <option value="consultas">Consultas</option>
          <option value="outros">Outros</option>
        </select>

        <div className="label">Relatório:</div>
        <input type="file" className="input" onChange={(e) => setRelatorio(e.target.files[0])} />

        <button type="submit" className="button">Enviar</button>
      </form>
    </div>
  );
};

export default App;
