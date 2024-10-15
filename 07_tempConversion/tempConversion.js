const convertToCelsius = function(tempFahrenheit) {
  const CONVERSION_CONST = 32;
  const DIVISION_CONVERSION = 5/9;
  const NUMBER_OF_DECIMAL_PLACES = 1;
  return parseFloat(Number((tempFahrenheit - CONVERSION_CONST) * DIVISION_CONVERSION).toFixed(NUMBER_OF_DECIMAL_PLACES));
};

const convertToFahrenheit = function(tempCelsius) {
  const CONVERSION_CONST = 32;
  const DIVISION_CONVERSION = 9/5;
  const NUMBER_OF_DECIMAL_PLACES = 1;
  return parseFloat(Number((tempCelsius * DIVISION_CONVERSION) + CONVERSION_CONST).toFixed(NUMBER_OF_DECIMAL_PLACES));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
