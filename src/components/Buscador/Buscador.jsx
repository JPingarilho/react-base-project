import React, { useState, useEffect } from "react";
import { ContainerBuscador } from "./Style";
import data from '../../data/clientes.json';

const Buscador = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(data);
  }, []);

  const filteredCompanies = companies.filter(company => 
    company.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredCompanies.map((company, index) => (
        <div key={index}>
          <h2>{company.nome}</h2>
          <p>Status: {company.status}</p>
          <p>Pacientes: {company.pacientes}</p>
        </div>
      ))}
    </div>
  );
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
  const [searchResult, setSearchResult] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(data);
  }, []);

  useEffect(() => {
    if (company) {
      const result = companies.filter(comp => 
        comp.nome.toLowerCase().includes(company.toLowerCase()) ||
        comp.status.toLowerCase().includes(company.toLowerCase())
      );
      setSearchResult(result);
    } else {
      setSearchResult([]);
    }
  }, [company, companies]);

  const handleSearch = (e) => {
    setCompany(e.target.value);
  };

  return (
    <ContainerBuscador>
      <div className="search-params">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="company">
            Empresa:
            <input
              onChange={handleSearch}
              id="company"
              value={company}
              placeholder="Digite o nome do cliente..."
            />
          </label>
        </form>

        {company && searchResult.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Status</th>
                <th>Pacientes</th>
              </tr>
            </thead>
            <tbody>
              {searchResult.map((result, index) => (
                <CompanyRow key={index} company={result} />
              ))}
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
