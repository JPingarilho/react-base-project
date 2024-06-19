import React, { useState, useEffect } from 'react';
import { style } from './Style';
import clientesData from '../../data/clientes.json';  // Import the JSON data

const DownloadsPendentes = () => {
  const [clientes, setClientes] = useState([]);
  const [filteredClientes, setFilteredClientes] = useState([]);

  useEffect(() => {
    // Filter clients with status "calibragem" and set their status to "Pendente"
    const pendingDownloads = clientesData
      .filter(cliente => cliente.status === 'calibragem')
      .map(cliente => ({ ...cliente, status: 'Pendente' }));

    setClientes(pendingDownloads);
    setFilteredClientes(pendingDownloads); // Initialize filteredClientes with all data
  }, []);

  const iniciarDownload = (nomeEmpresa) => {
    const updatedClientes = clientes.map(cliente => {
      if (cliente.nome === nomeEmpresa && cliente.status === 'Pendente') {
        // Trigger the file download
        const link = document.createElement('a');
        link.href = cliente.calibragem;
        link.download = cliente.calibragem.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Update the status
        return { ...cliente, status: 'feito' };
      }
      return cliente;
    });

    setClientes(updatedClientes);
    setFilteredClientes(updatedClientes);
  };

  const pesquisar = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = clientes.filter(cliente =>
      cliente.nome.toLowerCase().includes(searchTerm)
    );
    setFilteredClientes(filtered);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>Download de Calibragem</h1>
      <div className="pesquisa" style={style.pesquisa}>
        <input 
          type="text" 
          placeholder="Digite o nome do cliente..." 
          style={style.searchBar} 
          onChange={pesquisar}
        />
        <button style={style.searchButton} onClick={pesquisar}>Pesquisar</button>
      </div>
      <div className="downloads-pendentes" style={style.container}>
        <h2 style={style.title}>Downloads Pendentes</h2>
        <ul style={style.list}>
          {filteredClientes.map((cliente, index) => (
            <li key={index} style={style.item}>
              <div style={style.companyContainer}>
                <span style={style.name}>{cliente.nome}:</span>
                <span style={style.status}>{cliente.status}</span>
                {cliente.status === 'Pendente' && (
                  <button style={style.button} onClick={() => iniciarDownload(cliente.nome)}>Iniciar</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DownloadsPendentes;
