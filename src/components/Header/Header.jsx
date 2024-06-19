import React from 'react';
import { Link } from 'react-router-dom';
import { Top, LogoContainer, LinksContainer } from './Style';

const Header = () => (
  <Top>
    <LogoContainer>
      <img src="/logo.png" alt="Logo" className="logo" />
    </LogoContainer>
    <LinksContainer>
      <Link to="/">Home</Link>
      <Link to="/buscador">Buscador</Link>
      <Link to="/calibragem">Calibragem</Link>
      <Link to="/downloadpacientes">Clientes</Link>
      <Link to="/relatorio">Relatorio</Link>
    </LinksContainer>
  </Top>
);

export default Header;
