
import React, { useState } from 'react';
import './App.css';

const TemperatureConverter = () => {
  const [inputTemp, setInputTemp] = useState('');
  const [inputUnit, setInputUnit] = useState('Celsius');
  const [outputUnit, setOutputUnit] = useState('Fahrenheit');
  const [convertedTemp, setConvertedTemp] = useState('');

  const handleInputChange = (e) => {
    setInputTemp(e.target.value);
  };

  const handleInputUnitChange = (e) => {
    setInputUnit(e.target.value);
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
  };

  const convertTemperature = () => {
    let result;

    if (inputUnit === 'Celsius') {
      if (outputUnit === 'Fahrenheit') {
        result = (parseFloat(inputTemp) * 9/5) + 32;
      } else if (outputUnit === 'Kelvin') {
        result = parseFloat(inputTemp) + 273.15;
      } else {
        result = parseFloat(inputTemp);
      }
    } else if (inputUnit === 'Fahrenheit') {
      if (outputUnit === 'Celsius') {
        result = (parseFloat(inputTemp) - 32) * 5/9;
      } else if (outputUnit === 'Kelvin') {
        result = (parseFloat(inputTemp) - 32) * 5/9 + 273.15;
      } else {
        result = parseFloat(inputTemp);
      }
    } else if (inputUnit === 'Kelvin') {
      if (outputUnit === 'Celsius') {
        result = parseFloat(inputTemp) - 273.15;
      } else if (outputUnit === 'Fahrenheit') {
        result = (parseFloat(inputTemp) - 273.15) * 9/5 + 32;
      } else {
        result = parseFloat(inputTemp);
      }
    }

    setConvertedTemp(result.toFixed(2));
  };

  return (
    <div className="temperature-converter">
      <h1>Temperature Converter</h1>
      <div className="input-container">
        <label>
          Enter Temperature:
          <input type="number" value={inputTemp} onChange={handleInputChange} />
        </label>
      </div>
      <div className="input-container">
        <label>
          Select Input Unit:
          <select value={inputUnit} onChange={handleInputUnitChange}>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </label>
      </div>
      <div className="input-container">
        <label>
          Select Output Unit:
          <select value={outputUnit} onChange={handleOutputUnitChange}>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={convertTemperature}>Convert</button>
      </div>
      <div className="result-container">
        {convertedTemp && (
          <p>
            Converted Temperature: {convertedTemp} {outputUnit}
          </p>
        )}
      </div>
    </div>
  );
};

export default TemperatureConverter;

