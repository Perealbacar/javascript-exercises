const convertToCelsius = function(farenheitTemp) {

  let celsius = 0;
  celsius = (farenheitTemp - 32) * 5/9;

  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {

  let farenheit = 0;
  farenheit = celsiusTemp * 9/5 + 32;

  return Number(farenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
