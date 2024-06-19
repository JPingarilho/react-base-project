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
    margin: 20px auto; /* Add some margin to separate it from other elements */
    padding: 20px;
    text-align: center; /* Center align the text inside the form */
  }

  .search-params label {
    display: block;
    width: 100%;
    font-weight: bold; /* Make the label bold */
    margin-bottom: 20px; /* Add more margin below the label */
  }

  .search-params input {
    margin-bottom: 20px;
    font-size: 18px;
    height: 35px;
    width: 100%; /* Make the input take the full width */
    padding: 5px; /* Add some padding for better text spacing */
    box-sizing: border-box; /* Include padding in the element's total width and height */
    border: 1px solid #ccc; /* Add a border */
    border-radius: 4px; /* Rounded corners */
  }

  .search-params button,
  .details button {
    background-color: var(--primaria);
    padding: 10px 20px; /* Adjust padding for better button size */
    color: white;
    font-size: 16px; /* Adjust font size */
    border: none; /* Remove border */
    border-radius: 5px;
    display: inline-block; /* Inline block to avoid full width */
    margin-top: 10px; /* Add some margin on top */
    cursor: pointer;
    transition: background-color 0.3s; /* Smooth transition for hover effect */
  }

  .search-params button:hover,
  .details button:hover {
    background-color: darken(var(--primaria), 10%); /* Darken the button on hover */
  }

  table {
    width: 100%;
    max-width: 600px; /* Maximum width for the table */
    border-collapse: collapse;
    margin: 20px auto; /* Margin to separate from other elements */
  }

  th,
  td {
    text-align: left;
    padding: 10px; /* Increase padding for better spacing */
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: var(--background);
    font-weight: bold; /* Make the header bold */
  }

  p {
    text-align: center;
    margin-top: 20px; /* Increase margin for better spacing */
    color: #333; /* Text color */
  }
`;

export { ContainerBuscador };

