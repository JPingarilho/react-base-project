import React, { useState, useEffect } from 'react';
import { ContainerKanban } from './Style';
import { useNavigate } from 'react-router-dom';
import Velocimetro from "./Velocimetro";

const Kanban = () => {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('https://backend-react-based-project-1c2b661fb7ab.herokuapp.com/data/clientes');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCompanies();
  }, []);

  const statuses = ['backlog', 'calibragem', 'download', 'relatório', 'finalizado'];

  const companiesByStatus = statuses.reduce((acc, status) => {
    acc[status] = companies.filter(company => company.status === status);
    return acc;
  }, {});

  const handleColumnClick = (status) => {
    const paths = {
      'calibragem': '/calibragem',
      'relatório': '/relatorio',
      'download': '/downloadpacientes',
    };
    navigate(paths[status]);
  };

  const getProgressData = (company, status) => {
    if (status === 'download') {
      return { current: company.downloads, total: company.pacientes };
    } else if (status === 'relatório') {
      return { current: company.relatorio, total: company.pacientes };
    } else {
      return { current: 0, total: 0 };
    }
  };

  const handleIniciarClick = async (companyId) => {
    try {
      const response = await fetch(`https://backend-react-based-project-1c2b661fb7ab.herokuapp.com/data/clientes/${companyId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'calibragem' }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      // Update the local state to reflect the status change
      setCompanies((prevCompanies) =>
        prevCompanies.map((company) =>
          company.id === companyId ? { ...company, status: 'calibragem' } : company
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
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
              const { current, total } = getProgressData(company, status);
              return (
                <div key={company.id} className="kanban-task">
                  <strong>{company.nome}</strong>
                  {status === 'backlog' && (
                    <button onClick={() => handleIniciarClick(company.id)}>Iniciar</button>
                  )}
                  {(status === 'download' || status === 'relatório') && (
                    <p>Serviços: {company.pacientes}</p>
                  )}
                  {(status === 'download' || status === 'relatório') && (
                    <Velocimetro total={total} current={current} />
                  )}
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
