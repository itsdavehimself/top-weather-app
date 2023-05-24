const weatherArr = [];

function weatherFactory(location, isDay, cloud, tempF, tempC, condition, conditionIcon, feelsLikeF, feelsLikeC, humidity, precipIn, precipMM) {
  const weather = {
    location,
    isDay,
    cloud,
    tempF,
    tempC,
    condition,
    conditionIcon,
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