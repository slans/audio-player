import React, { Component } from 'react';

const fahrenheitToCelsius = temperature => {
  return (temperature - 32) / 1.8;
}
const celsiusToFahrenheit = temperature => {
  return (temperature * 1.8) + 32;
}

const convertTemp = (temperature, convertFunc) => {
  if (Number.isNaN(temperature)) {
    return '';
  }
  return Math.round(convertFunc(temperature));
}

class App extends Component {
  render() {
    return (
      <Calculator />
    )
  }
}

class Calculator extends Component {
  state = {
    temperature: 0,
    scale: 'c'
  }

  handleCelsiusChange = temperature => {
    this.setState({
      temperature,
      scale: 'c'
    })
  }

  handleFarenheitChange = temperature => {
    this.setState({
      temperature,
      scale: 'f'
    })
  }

  render() {
    const { scale, temperature } = this.state;
    const celsiusTemp = scale === 'c' ? temperature : convertTemp(temperature, fahrenheitToCelsius);
    const fahrenheitTemp = scale === 'f' ? temperature : convertTemp(temperature, celsiusToFahrenheit);

    return (
      <>
        <TemperatureInput
          scale='c'
          temperature={celsiusTemp}
          handleChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale='f'
          temperature={fahrenheitTemp}
          handleChange={this.handleFarenheitChange} />
        <BoilingVerdict temperature={celsiusTemp} />
      </>
    )
  }
}

const TemperatureInput = props => {
  const scaleNames = {
    'c': 'Celsius',
    'f': 'Fahrenheit'
  }

  const handleChange = e => {
    const value = e.target.value;
    if (isNaN(value)) return;
    props.handleChange(value);
  }

  return (
    <fieldset>
      <legend>Введите градусы по шкале {scaleNames[props.scale]}:</legend>
      <input value={props.temperature}
        onChange={handleChange} />
    </fieldset>
  )
}

const BoilingVerdict = props => {
  return (
    props.temperature > 100
      ? <p>The water is boiling!</p>
      : <p>The water would not boil</p>
  )
}

export default App;