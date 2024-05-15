import React, { useState } from 'react';
import {
  AppContainer,
  SearchBarContainer,
  DownloadsContainer,
  SectionContainer,
  DownloadsList,
  DownloadItem,
  DownloadButton,
  StyledInput
} from './style'; 

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
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Digite o nome completo do paciente..."
      />
      <DownloadButton type="submit">Buscar</DownloadButton>
    </form>
  );
};

const App = () => {
  const pendingDownloads = [
    { id: 1, paciente: 'Paciente 1' },
    { id: 2, paciente: 'Paciente 2' },
    { id: 3, paciente: 'Paciente 3' },
  ];

  const finalizedDownloads = [
    { id: 4, paciente: 'Paciente 4' },
    { id: 5, paciente: 'Paciente 5' },
    { id: 6, paciente: 'Paciente 6' },
  ];

  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (searchTerm) => {
    const foundInPending = pendingDownloads.find(download => download.paciente.toLowerCase() === searchTerm.toLowerCase());
    const foundInFinalized = finalizedDownloads.find(download => download.paciente.toLowerCase() === searchTerm.toLowerCase());

    if (foundInPending) {
      setSearchResult({ type: 'pending', data: foundInPending });
    } else if (foundInFinalized) {
      setSearchResult({ type: 'finalized', data: foundInFinalized });
    } else {
      setSearchResult({ type: 'notFound' });
    }
  };

  return (
    <AppContainer>
      <h1>Download de Pacientes</h1>
      <SearchBarContainer>
        <SearchBar onSearch={handleSearch} />
      </SearchBarContainer>
      <DownloadsContainer>
        <SectionContainer>
          <h2>Downloads Pendentes</h2>
          <DownloadsList>
            {pendingDownloads.map((download) => (
              <DownloadItem key={download.id}>
                <span>{download.paciente}</span>
                <DownloadButton>Iniciar</DownloadButton>
              </DownloadItem>
            ))}
          </DownloadsList>
        </SectionContainer>
        <SectionContainer>
          <h2>Downloads Finalizados</h2>
          <DownloadsList>
            {finalizedDownloads.map((download) => (
              <DownloadItem key={download.id}>
                <span>{download.paciente}</span>
                <DownloadButton>Visualizar</DownloadButton>
              </DownloadItem>
            ))}
          </DownloadsList>
        </SectionContainer>
      </DownloadsContainer>
      {searchResult && searchResult.type === 'notFound' && (
        <div>
          <h2>Paciente não encontrado</h2>
        </div>
      )}
      {searchResult && searchResult.type !== 'notFound' && (
        <div>
          <h2>Resultado da Busca</h2>
          <DownloadItem>
            <span>{searchResult.data.paciente}</span>
            {searchResult.type === 'pending' ? (
              <DownloadButton>Iniciar</DownloadButton>
            ) : (
              <DownloadButton>Visualizar</DownloadButton>
            )}
          </DownloadItem>
        </div>
      )}
    </AppContainer>
  );
};

export default App;
