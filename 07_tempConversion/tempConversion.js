const convertToCelsius = function (temp) {

  let tempCelsius = (temp - 32) * (5 / 9); // temp conversion

  // when there's decimals:
  if (tempCelsius % 1 !== 0) {
    tempCelsius = tempCelsius.toFixed(1); // toFixed returns a string
  }
  return Number(tempCelsius); // convert to number
};

const convertToFahrenheit = function (temp) {
  let tempFahren = temp * (9 / 5) + 32; // temp conversion
  console.log(tempFahren);

  // when there's decimals:
  if (tempFahren % 1 !== 0) {
    tempFahren = tempFahren.toFixed(1); // toFixed returns a string
    console.log(tempFahren);
  }
  return Number(tempFahren); // convert to number
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
