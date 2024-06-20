import React, { useState, useEffect } from 'react';
import { style } from '../Download/Style';

const DownloadsPendentes = () => {
  const [clientes, setClientes] = useState([]);
  const [filteredClientes, setFilteredClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('https://backend-react-based-project-1c2b661fb7ab.herokuapp.com/data/clientes');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Fetched data:', data);  // Debugging log
        
        // Filter clients with status 'calibragem' and set status to 'Pendente'
        const calibragemClientes = data
          .filter(cliente => cliente.status === 'calibragem')
          .map(cliente => ({ ...cliente, status: 'Pendente' }));

        console.log('Calibragem clients:', calibragemClientes);  // Debugging log
        setClientes(calibragemClientes);
        setFilteredClientes(calibragemClientes); // Initialize filteredClientes with filtered data

        // Save the initial state to local storage
        localStorage.setItem('clientes', JSON.stringify(calibragemClientes));
      } catch (error) {
        console.error('Error fetching JSON file:', error);
      }
    };

    fetchClientes();
  }, []);

  const iniciarDownload = async (cliente) => {
    // Trigger the file download using window.open
    window.open(`https://backend-react-based-project-1c2b661fb7ab.herokuapp.com${cliente.calibragem}`, '_blank');

    const updatedClientes = clientes.map(c => {
      if (c.id === cliente.id && c.status === 'Pendente') {
        // Update the status locally
        const updatedCliente = { ...c, status: 'download' };
        updateLocalStorage(updatedCliente);

        // Update the status in the SQLite database
        updateStatusOnServer(updatedCliente);

        return updatedCliente;
      }
      return c;
    });

    console.log('Updated clients after download:', updatedClientes);  // Debugging log
    setClientes(updatedClientes);
    setFilteredClientes(updatedClientes);
  };

  const updateLocalStorage = (updatedCliente) => {
    const clientesFromStorage = JSON.parse(localStorage.getItem('clientes')) || [];
    const updatedClientesFromStorage = clientesFromStorage.map(cliente =>
      cliente.id === updatedCliente.id ? updatedCliente : cliente
    );
    localStorage.setItem('clientes', JSON.stringify(updatedClientesFromStorage));
  };

  const updateStatusOnServer = async (updatedCliente) => {
    try {
      const response = await fetch(`https://backend-react-based-project-1c2b661fb7ab.herokuapp.com/data/clientes/${updatedCliente.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: updatedCliente.status }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error updating status on server:', error);
    }
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
                  <button 
                    style={style.button} 
                    onClick={() => iniciarDownload(cliente)}
                  >
                    Iniciar
                  </button>
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


