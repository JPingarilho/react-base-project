import React, { useState, useEffect } from 'react';
import { ContainerRelatorios } from './style.js';

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

const RelatorioApp = () => {
  const [companies, setCompanies] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [view, setView] = useState('home');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [uploadedPatients, setUploadedPatients] = useState([]);
  const [files, setFiles] = useState({});

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
    const found = companies.find(company => company.nome.toLowerCase() === searchTerm.toLowerCase() && company.status === 'relatório');
    if (found) {
      setSearchResult({ data: found });
    } else {
      setSearchResult({ type: 'notFound' });
    }
    setView('results');
  };

  const handleVisualizar = (company) => {
    setSelectedCompany(company);
    const initialUploadedPatients = Array.from({ length: company.relatorio }, (_, i) => i); // Initialize uploaded patients based on the number of uploads
    setUploadedPatients(initialUploadedPatients);
    setView('pacientes');
  };

  const handleVoltar = () => {
    setView('home');
  };

  const handleFileChange = (e, pacienteIndex) => {
    const newFiles = { ...files, [pacienteIndex]: e.target.files[0] };
    setFiles(newFiles);
  };

  const handleUpload = async (companyId, pacienteIndex) => {
    const file = files[pacienteIndex];
    if (!file) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('pacienteIndex', pacienteIndex);

    try {
      console.log(`Uploading file for company ID ${companyId}, patient index ${pacienteIndex}`);
      const uploadResponse = await fetch(`https://backend-react-based-project-1c2b661fb7ab.herokuapp.com/upload-relatorio/${companyId}`, {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('File upload failed: ' + uploadResponse.statusText);
      }

      console.log(`Incrementing relatorio for company ID ${companyId}`);
      const incrementResponse = await fetch(`https://backend-react-based-project-1c2b661fb7ab.herokuapp.com/increment-relatorio/${companyId}`, {
        method: 'PATCH',
      });

      if (!incrementResponse.ok) {
        throw new Error('Failed to increment relatorio: ' + incrementResponse.statusText);
      }

      // Update the local state to reflect the uploaded patient
      setUploadedPatients(prev => [...prev, pacienteIndex]);

      const updatedCompanies = companies.map(company => {
        if (company.id === companyId) {
          return { ...company, relatorio: company.relatorio + 1 };
        }
        return company;
      });

      setCompanies(updatedCompanies);
    } catch (error) {
      console.error('Error uploading relatório:', error);
    }
  };

  const handleConcluirCliente = async (companyId) => {
    try {
      const response = await fetch(`https://backend-react-based-project-1c2b661fb7ab.herokuapp.com/update-status-finalizado/${companyId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'finalizado' }) // Set status to 'finalizado'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const updatedCompanies = companies.map(company => {
        if (company.id === companyId) {
          return { ...company, status: 'finalizado' }; // Update status in the local state
        }
        return company;
      });

      setCompanies(updatedCompanies);
      setView('home'); // Navigate back to home after concluding
    } catch (error) {
      console.error('Error updating status to finalizado:', error);
    }
  };

  const companiesInRelatorio = companies.filter(company => company.status === 'relatório');

  return (
    <ContainerRelatorios>
      {view === 'home' && (
        <>
          <h1>Upload de Relatórios</h1>
          <SearchBar onSearch={handleSearch} />
          <div className="downloads-container">
            <div className="section-container">
              <h2>Clientes com Relatórios Pendentes</h2>
              <ul className="downloads-list">
                {companiesInRelatorio.map((company) => (
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
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, i)}
                      disabled={uploadedPatients.includes(i)}
                    />
                    {uploadedPatients.includes(i) ? (
                      <span>Concluído</span>
                    ) : (
                      <button
                        className="download-button"
                        onClick={() => handleUpload(selectedCompany.id, i)}
                      >
                        Upload
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              {uploadedPatients.length === selectedCompany.pacientes && (
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
    </ContainerRelatorios>
  );
};

export default RelatorioApp;


