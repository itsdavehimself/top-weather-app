const weatherArr = [];

function weatherFactory(location, cloud, tempF, tempC, condition, feelsLikeF, feelsLikeC, humidity, precipIn, precipMM) {
  const weather = {
    location,
    cloud,
    tempF,
    tempC,
    condition,
    feelsLikeF,
    feelsLikeC,
    humidity,
    precipIn,
    precipMM,
  }
  weatherArr.pop();
  weatherArr.push(weather);
}

export { weatherFactory, weatherArr };