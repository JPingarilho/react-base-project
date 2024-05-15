import styled from "styled-components";

export const AppContainer = styled.article`
  font-family: 'Arial, sans-serif';
  text-align: center;
  padding: 20px;
`;

export const SearchBarContainer = styled.div`
  margin-bottom: 20px;
`;

export const DownloadsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const SectionContainer = styled.div`
  width: 45%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; /* Adição de margem inferior */
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
  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 90px);
  box-sizing: border-box;
`;
