import React, { useState } from 'react';
import './Calibration.css'; // Importa os estilos

const CalibrationPage = () => {
  // Estado para armazenar os valores calibrados
  const [calibrationValues, setCalibrationValues] = useState({
    temperature: 0,
    pressure: 0,
    voltage: 0
  });

  // Função para atualizar os valores calibrados
  const handleCalibrationChange = (event) => {
    const { name, value } = event.target;
    setCalibrationValues(prevValues => ({
      ...prevValues,
      [name]: parseFloat(value)
    }));
  };

  return (
    <div className="calibration">
      <h1>Calibragem</h1>
      <div className="calibration-form">
        <label>
          Temperatura:
          <input
            type="number"
            name="temperature"
            value={calibrationValues.temperature}
            onChange={handleCalibrationChange}
          />
        </label>
        <label>
          Pressão:
          <input
            type="number"
            name="pressure"
            value={calibrationValues.pressure}
            onChange={handleCalibrationChange}
          />
        </label>
        <label>
          Voltagem:
          <input
            type="number"
            name="voltage"
            value={calibrationValues.voltage}
            onChange={handleCalibrationChange}
          />
        </label>
      </div>
    </div>
  );
}

export default CalibrationPage;
