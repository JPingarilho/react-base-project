import React, { useState } from "react";
import { ContainerBuscador } from "./Style";

const COMPANIES = {
  "copa dor": {
    nome: "Copa D'Or",
    status: "calibragem",
    pacientes: "23/70"
  },
  "cdpi": {
    nome: "CDPI",
    status: "relatório",
    pacientes: "52/80"
  },
  "barra dor": {
    nome: "Barra D'Or",
    status: "calibragem",
    pacientes: "69/90"
  },
  "miguel couto": {
    nome: "Miguel Couto",
    status: "finalizado",
    pacientes: "70/70"
  },
  "americas": {
    nome: "Americas",
    status: "backlog",
    pacientes: "0/30"
  }
};


const CompanyRow = ({ company }) => {
  return (
    <tr>
      <th>{company.nome}</th>
      <th>{company.status}</th>
      <th>{company.pacientes}</th>
    </tr>
  );
};

const SearchParams = () => {
  const [company, setCompany] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const result = COMPANIES[company.toLowerCase()];
    setSearchResult(result || null);
  };

  return (
    <ContainerBuscador>
      <div className="search-params">
        <form onSubmit={handleSearch}>
          <label htmlFor="company">
            Empresa:
            <input
              onChange={(e) => setCompany(e.target.value)}
              id="company"
              value={company}
              placeholder="Digite o nome da empresa"
            />
          </label>
          <button type="submit">Pesquisar</button>
        </form>

        {searchResult ? (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Status</th>
                <th>Pacientes</th>
              </tr>
            </thead>
            <tbody>
              <CompanyRow company={searchResult} />
            </tbody>
          </table>
        ) : company && (
          <p>Nenhuma empresa encontrada com esse nome.</p>
        )}
      </div>
    </ContainerBuscador>
  );
};

export default SearchParams;