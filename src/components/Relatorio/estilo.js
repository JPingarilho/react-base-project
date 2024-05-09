import styled from "styled-components";


// Estilize os elementos .form-container usando styled-components
const FormContainer = styled.div`
  width: 500px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
`;

// Estilize os elementos .label usando styled-components
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

// Estilize os elementos .input usando styled-components
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

// Estilize os elementos .button usando styled-components
const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Exporte os componentes estilizados
export { FormContainer, Label, Input, Button };
