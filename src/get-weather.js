import { weatherArr, weatherFactory } from './weather-factory';

async function getWeather(locationInput) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=037482b07253479693951616232305&q=${ locationInput }&aqi=no`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    const location = weatherData.location.name;
    const {cloud} = weatherData.current;
    const tempF = weatherData.current.temp_f;
    const tempC = weatherData.current.temp_c;
    const condition = weatherData.current.condition.text;
    const feelsLikeF = weatherData.current.feelslike_f;
    const feelsLikeC = weatherData.current.feelslike_c;
    const {humidity} = weatherData.current;
    const precipIn = weatherData.current.precip_in;
    const precipMM = weatherData.current.precip_mm;
    weatherFactory(location, cloud, tempF, tempC, condition, feelsLikeF, feelsLikeC, humidity, precipIn, precipMM);
    console.log(weatherArr[0]);
  } catch(error) {
    console.log(error);
  }
};

export default getWeather;