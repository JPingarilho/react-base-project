import styled from "styled-components";

export const AppContainer = styled.article`
  font-family: 'Arial, sans-serif';
  text-align: center;
  padding: 20px;
`;

export const SearchBarContainer = styled.div`
  margin-bottom: 20px;
  position: relative; /* Adicionando posição relativa para o SearchBarContainer */
`;

export const DownloadsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SectionContainer = styled.div`
  width: 90%;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 35px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border: 1px solid #e3e3e3;
`;

export const DownloadsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const DownloadItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DownloadButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

export const SearchButton = styled(DownloadButton)` // Definindo SearchButton como DownloadButton
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 20px; /* Adicionando padding ao botão */
`;
