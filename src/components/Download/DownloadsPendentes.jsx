import React, { useState } from 'react';

const DownloadsPendentes = () => {
  const [downloads, setDownloads] = useState([
    { nome: 'Empresa X', status: 'Pendente' },
    { nome: 'Empresa Y', status: 'Pendente' },
    { nome: 'Empresa Z', status: 'Pendente' },
    { nome: 'Empresa W', status: 'Pendente' },
    { nome: 'Empresa V', status: 'Pendente' },
    { nome: 'Empresa U', status: 'Pendente' },
  ]);

  return (
    <div className="downloads-pendentes">
      <h2>Downloads Pendentes</h2>
      <ul>
        {downloads.map((download) => (
          <li key={download.nome}>
            {download.nome} - {download.status}
            <button onClick={() => iniciarDownload(download.nome)}>Iniciar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const iniciarDownload = (nomeEmpresa) => {
  // Atualizar o status do download para "Em andamento"
  setDownloads(downloads.map((download) => {
    if (download.nome === nomeEmpresa) {
      return { ...download, status: 'Em andamento' };
    } else {
      return download;
    }
  }));

  // Simular o download (pode ser substituído por lógica real)
  setTimeout(() => {
    setDownloads(downloads.map((download) => {
      if (download.nome === nomeEmpresa) {
        return { ...download, status: 'Concluído' };
      } else {
        return download;
      }
    }));
  }, 2000);
};

export default DownloadsPendentes;
