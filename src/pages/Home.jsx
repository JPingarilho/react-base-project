import React, { useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import Base from "./Base";
import { auth } from "../config/Firebase";

const Home = () => {
  const [nomePaciente, setNomePaciente] = useState('');
  const [tipoRelatorio, setTipoRelatorio] = useState('');
  const [relatorio, setRelatorio] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nomePaciente', nomePaciente);
    formData.append('tipoRelatorio', tipoRelatorio);
    formData.append('relatorio', relatorio);

    // Lógica para lidar com o envio do formulário aqui
    // Por exemplo, você pode enviar formData para um endpoint da API
  };

  return (
    <Base>
      <div className="pesquisa-container">
        <input 
          type="text" 
          placeholder="Digite o nome do paciente"
          value={nomePaciente}
          onChange={(e) => setNomePaciente(e.target.value)}
        />
      </div>
      <div className="preciso-container">
        <div className="pendentes">
          <h2>Pendentes</h2>
          <div className="empresa">
            Empresa <button>Iniciar</button>
          </div>
        </div>
        <div className="pendentes">
          <h2>Calibragem</h2>
          <div className="empresa">
            Empresa <button>Iniciar</button>
          </div>
        </div>
        <div className="pendentes">
          <h2>Download pacientes</h2>
          <div className="empresa">
            Empresa <button>Iniciar</button>
          </div>
        </div>
        <div className="pendentes">
          <h2>Anexo Relatório</h2>
          <div className="empresa">
            Empresa <button>Iniciar</button>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
