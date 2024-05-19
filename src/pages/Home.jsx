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
    <Base>
        <div className="pesquisa-container">
          <input type="text" placeholder="Digite o nome da empresa" />
        </div>
        <div className="preciso-container">
          <div className="pendenetes">
            <h2>Pendentes</h2>
            <div className="empresa">
              Empresa <button>Iniciar</button>
            </div>
          </div>
          <div className="pendenetes">
            <h2>Calibragem</h2>
            <div className="empresa">
              Empresa <button>Iniciar</button>
            </div>
          </div>
          <div className="pendenetes">
            <h2>Download pacientes</h2>
            <div className="empresa">
              Empresa <button>Iniciar</button>
            </div>
          </div>
          <div className="pendenetes">
            <h2>Anexo Relatorio</h2>
            <div className="empresa">
              Empresa <button>Iniciar</button>
            </div>
          </div>
        </div>
    </Base>
  )
}

export default Home
