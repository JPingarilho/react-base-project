import React, { useState, useEffect } from 'react';
import { ContainerPacientes } from './Style';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Digite o nome do cliente..."
          className="styled-input"
          style={{ marginRight: '10px' }}
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>
    </div>
  );
};

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [view, setView] = useState('home');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [downloadedPatients, setDownloadedPatients] = useState([]);

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

  const handleSearch = (searchTerm) => {
    const found = companies.find(company => company.nome.toLowerCase() === searchTerm.toLowerCase() && company.status === 'download');
    if (found) {
      setSearchResult({ data: found });
    } else {
      setSearchResult({ type: 'notFound' });
    }
    setView('results');
  };

  const handleVisualizar = (company) => {
    setSelectedCompany(company);
    const initialDownloadedPatients = Array.from({ length: company.downloads }, (_, i) => i); // Initialize downloaded patients based on the number of downloads
    setDownloadedPatients(initialDownloadedPatients);
    setView('pacientes');
  };

  const handleVoltar = () => {
    setView('home');
  };

  const handleDownload = async (companyId, pacienteIndex) => {
    alert(`Downloading Paciente ${pacienteIndex + 1}`);
    // Implement actual download logic here

    try {
      const response = await fetch(`https://backend-react-based-project-1c2b661fb7ab.herokuapp.com/update-downloads/${companyId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      // Update the local state to reflect the downloaded patient
      setDownloadedPatients(prev => [...prev, pacienteIndex]);

      const updatedCompanies = companies.map(company => {
        if (company.id === companyId) {
          return { ...company, downloads: company.downloads + 1 };
        }
        return company;
      });

      setCompanies(updatedCompanies);
    } catch (error) {
      console.error('Error updating downloads:', error);
    }
  };

  const handleConcluirCliente = async (companyId) => {
    try {
      const response = await fetch(`https://backend-react-based-project-1c2b661fb7ab.herokuapp.com/update-status-relatorio/${companyId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const updatedCompanies = companies.map(company => {
        if (company.id === companyId) {
          return { ...company, status: 'relatório' };
        }
        return company;
      });

      setCompanies(updatedCompanies);
      setView('home'); // Navigate back to home after concluding
    } catch (error) {
      console.error('Error updating status to relatório:', error);
    }
  };

  const companiesInDownload = companies.filter(company => company.status === 'download');

  return (
    <ContainerPacientes>
      {view === 'home' && (
        <>
          <h1>Download de Pacientes</h1>
          <SearchBar onSearch={handleSearch} />
          <div className="downloads-container">
            <div className="section-container">
              <h2>Clientes com Download</h2>
              <ul className="downloads-list">
                {companiesInDownload.map((company) => (
                  <li key={company.id} className="download-item">
                    <span>{company.nome}</span>
                    <button className="download-button" onClick={() => handleVisualizar(company)}>Visualizar</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
      {view === 'pacientes' && selectedCompany && (
        <>
          <h1>Pacientes de {selectedCompany.nome}</h1>
          <div className="downloads-container">
            <div className="section-container">
              <h2>Pacientes</h2>
              <ul className="downloads-list">
                {Array.from({ length: selectedCompany.pacientes }, (_, i) => (
                  <li key={i} className="download-item">
                    <span>Paciente {i + 1}</span>
                    <button 
                      className="download-button" 
                      onClick={() => handleDownload(selectedCompany.id, i)}
                      disabled={downloadedPatients.includes(i)}
                    >
                      {downloadedPatients.includes(i) ? 'Concluido' : 'Download'}
                    </button>
                  </li>
                ))}
              </ul>
              {downloadedPatients.length === selectedCompany.pacientes && (
                <button className="download-button" onClick={() => handleConcluirCliente(selectedCompany.id)}>Concluir Cliente</button>
              )}
            </div>
          </div>
          <button className="download-button" onClick={handleVoltar}>Voltar</button>
        </>
      )}
      {view === 'results' && (
        <>
          <SearchBar onSearch={handleSearch} />
          <button className="download-button" onClick={handleVoltar}>Voltar</button>
          {searchResult && searchResult.type === 'notFound' && (
            <div>
              <h2>Empresa não encontrada</h2>
            </div>
          )}
          {searchResult && searchResult.type !== 'notFound' && (
            <div>
              <h2>Resultado da Busca:</h2>
              <li className="download-item">
                <span>{searchResult.data.nome}</span>
                <button className="download-button" onClick={() => handleVisualizar(searchResult.data)}>Visualizar</button>
              </li>
            </div>
          )}
        </>
      )}
    </ContainerPacientes>
  );
};

export default App;
