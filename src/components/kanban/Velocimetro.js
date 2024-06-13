import React from 'react';
import styled from 'styled-components';

const VelocimetroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const BarContainer = styled.div`
  position: relative;
  width: 100px;
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const CompletedBar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: #2196f3; /* Azul para serviços concluídos */
`;

const RemainingBar = styled.div`
  width: ${(props) => 100 - props.percentage}%;
  height: 100%;
  background: #f44336; /* Vermelho para serviços restantes */
  position: absolute;
  top: 0;
  right: 0;
`;

const Label = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

const Velocimetro = ({ total, current }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;
  return (
    <VelocimetroContainer>
      <BarContainer>
        <CompletedBar percentage={percentage} />
        <RemainingBar percentage={percentage} />
      </BarContainer>
      <Label>{current}/{total} Serviços</Label>
    </VelocimetroContainer>
  );
};

export default Velocimetro;
