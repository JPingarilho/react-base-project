import styled from "styled-components";

const ContainerPacientes = styled.article`
  font-family: 'Arial, sans-serif';
  text-align: center;
  padding: 20px;

  .search-bar-container {
    margin-bottom: 20px;
    position: relative;
  }

  .downloads-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .section-container {
    width: 90%;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 35px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    border: 1px solid #e3e3e3;
  }

  .downloads-list {
    list-style-type: none;
    padding: 0;
  }

  .download-item {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .download-button {
    background-color: var(--primaria);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }

  .styled-input {
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  .search-button {
    background-color: var(--primaria);
    color: #fff;
    border: none;
    border-radius: 5px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export { ContainerPacientes };
