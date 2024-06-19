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
    <SearchBarContainer>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <StyledInput
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Digite o nome do cliente..."
          style={{ marginRight: '10px' }}
        />
        <DownloadButton type="submit">Buscar</DownloadButton>
      </form>
    </SearchBarContainer>
  );
};

const App = () => {
  const empresasCadastradas = [
    { id: 1, empresa: 'Cliente 1' },
    { id: 2, empresa: 'Cliente 2' },
    { id: 3, empresa: 'Cliente 3' },
  ];

  const pendingDownloads = [
    { id: 1, paciente: 'Cliente 1' },
    { id: 2, paciente: 'Cliente 2' },
    { id: 3, paciente: 'Cliente 3' },
  ];

  const finalizedDownloads = [
    { id: 4, paciente: 'cliente 4' },
    { id: 5, paciente: 'cliente 5' },
    { id: 6, paciente: 'cliente 6' },
  ];

  const [searchResult, setSearchResult] = useState(null);
  const [view, setView] = useState('home'); // Estado para controlar a visualização

  const handleSearch = (searchTerm) => {
    const found = empresasCadastradas.find(empresa => empresa.empresa.toLowerCase() === searchTerm.toLowerCase());
    if (found) {
      setSearchResult({ data: found });
    } else {
      setSearchResult({ type: 'notFound' });
    }
    setView('results'); // Muda a visualização para resultados
  };

  const handleVisualizar = () => {
    setView('downloads');
  };

  const handleVoltar = () => {
    setView('home');
  };

  return (
    <AppContainer>
      {view === 'home' && (
        <>
          <h1></h1>
          <SearchBar onSearch={handleSearch} />
          <DownloadsContainer>
            <SectionContainer>
              <h2>Clientes Cadastrados</h2>
              <DownloadsList>
                {empresasCadastradas.map((empresa) => (
                  <DownloadItem key={empresa.id}>
                    <span>{empresa.empresa}</span>
                    <DownloadButton onClick={handleVisualizar}>Visualizar</DownloadButton>
                  </DownloadItem>
                ))}
              </DownloadsList>
            </SectionContainer>
          </DownloadsContainer>
        </>
      )}
      {view === 'downloads' && (
        <>
          <h1>Downloads serviços</h1>
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
                    <DownloadButton>Iniciar</DownloadButton>
                  </DownloadItem>
                ))}
              </DownloadsList>
            </SectionContainer>
          </DownloadsContainer>
          <DownloadButton onClick={handleVoltar}>Voltar</DownloadButton>
        </>
      )}
      {view === 'results' && (
        <>
          <SearchBar onSearch={handleSearch} />
          <DownloadButton onClick={handleVoltar}>Voltar</DownloadButton>
          {searchResult && searchResult.type === 'notFound' && (
            <div>
              <h2>Empresa não encontrada</h2>
            </div>
          )}
          {searchResult && searchResult.type !== 'notFound' && (
            <div>
              <h2>Resultado da Busca:</h2>
              <DownloadItem>
                <span>{searchResult.data.empresa}</span>
                <DownloadButton onClick={handleVisualizar}>Visualizar</DownloadButton>
              </DownloadItem>
            </div>
          )}
        </>
      )}
    </AppContainer>
  );
};

export default App;
