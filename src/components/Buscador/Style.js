import styled from "styled-components";

const ContainerBuscador = styled.article`
  .search-params {
    width: 1100px;
    margin: 0 auto;
  }

  .search-params form {
    border-radius: 6px;
    background: var(--background);
    box-shadow: 0px 0px 12px #aaa, -0px -0px 12px #fff;
    width: 360px;
    margin: 0 auto; /* Center the form */
    padding: 35px 15px 15px 15px;
  }

  .search-params label {
    display: block;
    width: 60px;
  }

  .search-params input {
    margin-bottom: 30px;
    font-size: 18px;
    height: 30px;
    width: 325px;
  }

  .search-params button,
  .details button {
    background-color: var(--primaria);
    padding: 5px 25px;
    color: white;
    font-size: 18px;
    border: #333 1px solid;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }

  table {
    width: 325px;
    border-collapse: collapse;
    margin: 10px auto; 
  }

  th,
  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: var(--background);
  }

  p {
    text-align: center; 
    margin-top: 10px;
  }
`;

export { ContainerBuscador };