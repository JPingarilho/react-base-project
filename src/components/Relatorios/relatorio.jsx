import { useState } from 'react';
import { FormContainer, Label, Input, Button } from "./style.js";

const Relatorio = () => {
  const [nomePaciente, setNomePaciente] = useState('');
  const [tipoRelatorio, setTipoRelatorio] = useState('');
  const [relatorioArquivo, setRelatorioArquivo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nomePaciente', nomePaciente);
    formData.append('tipoRelatorio', tipoRelatorio);
    formData.append('relatorio', relatorioArquivo);
  };

  return (
    <FormContainer>
      <h1>Anexar Relatório Médico</h1>

      <form onSubmit={handleSubmit}>
        <Label>Nome do Paciente:</Label>
        <Input type="text" value={nomePaciente} onChange={(e) => setNomePaciente(e.target.value)} />

        <Label>Tipo de Relatório:</Label>
        <select value={tipoRelatorio} onChange={(e) => setTipoRelatorio(e.target.value)}>
          <option value="">Selecione</option>
          <option value="exames">Exames</option>
          <option value="consultas">Consultas</option>
          <option value="outros">Outros</option>
        </select>

        <Label>Relatório:</Label>
        <input type="file" onChange={(e) => setRelatorioArquivo(e.target.files[0])} />

        <Button type="submit">Enviar</Button>
      </form>
    </FormContainer>
  );
};

export default Relatorio;