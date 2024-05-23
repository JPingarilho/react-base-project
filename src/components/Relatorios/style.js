import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 50px auto; /* Reduzi a margem superior para 50px */
  padding: 40px;
  border: 1px solid #e3e3e3;
  border-radius: 35px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  margin-top: 7px;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 40px;
  background-color: var(--primaria);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export { FormContainer, Label, Input, Button };
