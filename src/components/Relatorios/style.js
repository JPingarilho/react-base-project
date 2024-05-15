import styled from "styled-components";


const FormContainer = styled.div`
  width: 380px;
  border: 0px solid #ccc;
  padding:300px;
  border-radius: 5px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 13px;
`;


const Input = styled.input`
  width: 100%;
  padding: 7px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

export { FormContainer, Label, Input, Button };