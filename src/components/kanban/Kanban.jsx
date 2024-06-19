import React, { useState, useEffect } from 'react';
import { ContainerKanban } from './Style';
import { useNavigate } from 'react-router-dom';
import Velocimetro from "./Velocimetro";
import data from '../../data/clientes.json';

const Kanban = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(data);
  }, []);

  const statuses = ['backlog', 'calibragem', 'relatório', 'finalizado'];
  const navigate = useNavigate();

  const companiesByStatus = statuses.reduce((acc, status) => {
    acc[status] = companies.filter(company => company.status === status);
    return acc;
  }, {});

  const handleColumnClick = (status) => {
    const paths = {
      'calibragem': '/calibragem',
      'relatório': '/relatorio',
    };
    navigate(paths[status]);
  };

  const getCurrentAndTotalPatients = (pacientes) => {
    const [current, total] = pacientes.split('/').map(Number);
    return { current, total };
  };

  return (
    <ContainerKanban>
      <div className="kanban-board">
        {statuses.map((status) => (
          <div 
            key={status}
            className="kanban-column"
            onClick={() => handleColumnClick(status)}
          >
            <h2>{status.toUpperCase()}</h2>
            {companiesByStatus[status].map((company) => {
              const { current, total } = getCurrentAndTotalPatients(company.pacientes);
              return (
                <div key={company.nome} className="kanban-task">
                  <strong>{company.nome}</strong>
                  <p>Serviços: {company.pacientes}</p>
                  <Velocimetro total={total} current={current} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </ContainerKanban>
  );
};

export default Kanban;

