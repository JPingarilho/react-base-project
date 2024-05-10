import styled from "styled-components";

export const AppContainer = styled.article`
  font-family: 'Arial, sans-serif';
  text-align: center;
`;

export const SearchBarContainer = styled.div`
  margin-bottom: 20px;
`;

export const DownloadsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
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
  padding: 5px 10px;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  /* Adicione estilos para o campo de entrada aqui */
`;