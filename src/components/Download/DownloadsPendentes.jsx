import React, { useState } from 'react';
import { style } from './Style'; 

const DownloadsPendentes = () => {
  const [downloads, setDownloads] = useState([
    { nome: 'cliente X', status: 'Pendente' },
    { nome: 'cliente Y', status: 'Pendente' },
    { nome: 'Cliente Z', status: 'Pendente' },
    { nome: 'Cliente W', status: 'Pendente' },
    { nome: 'Cliente V', status: 'Pendente' },
  ]);

  const iniciarDownload = (nomeEmpresa) => {
    console.log(`Iniciando download para ${nomeEmpresa}`);
    // Lógica para iniciar o download
  };

  const pesquisar = () => {
    // Lógica para a pesquisa
    console.log('Pesquisa realizada');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>Download de Calibragem</h1>
      <div className="pesquisa" style={style.pesquisa}>
        <input type="text" placeholder="Digite o nome do cliente..." style={style.searchBar} />
        <button style={style.searchButton} onClick={pesquisar}>Pesquisar</button>
      </div>
      <div className="downloads-pendentes" style={style.container}>
        <h2 style={style.title}>Downloads Pendentes</h2>
        <ul style={style.list}>
          {downloads.map((download, index) => (
            <li key={index} style={style.item}>
              <div style={style.companyContainer}>
                <span style={style.name}>{download.nome}:</span>
                <span style={style.status}>{download.status}</span>
                <button style={style.button} onClick={() => iniciarDownload(download.nome)}>Iniciar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DownloadsPendentes;