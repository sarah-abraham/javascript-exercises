const convertToCelsius = function(fahrenheitTemperature) {
  let result =  Math.ceil(((fahrenheitTemperature - 32)*5/9)*10)/10;
  return result;
};

const convertToFahrenheit = function(celsiusTemperature) {
  let result = Math.ceil(((celsiusTemperature*9/5)+32)*10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
