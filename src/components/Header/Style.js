import styled from "styled-components";

const Top = styled.header`
  padding: .5em 2em;
  background-color: var(--header-bg);
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o container de links */
  position: relative; /* Permite o uso de posicionamento absoluto */
`;

const LogoContainer = styled.div`
  position: absolute; /* Posiciona a logo de forma absoluta */
  left: 2em; /* Ajusta a posição da logo conforme necessário */
  display: flex;
  align-items: center;

  .logo {
    height: 50px; /* Defina a altura desejada */
    width: auto; /* Mantém a proporção da imagem */
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os links */
  align-items: center;

  a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    background-color: var(--background);
    text-decoration: none;
    font-weight: bold;
    color: var(--destaque);
    text-transform: uppercase;
    border-radius: 5px;
    &:hover {
      background-color: var(--primaria);
      color: var(--background);
    }
  }
`;

export { Top, LogoContainer, LinksContainer };
