import renderWeather from './render-weather';
import { weatherFactory } from './weather-factory';

async function getWeather(locationInput) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=037482b07253479693951616232305&q=${ locationInput }&aqi=no`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    const location = weatherData.location.name;
    const {cloud} = weatherData.current;
    const isDay = weatherData.current.is_day;
    const tempF = weatherData.current.temp_f.toFixed(0);
    const tempC = weatherData.current.temp_c.toFixed(0);
    const condition = weatherData.current.condition.text;
    const conditionIcon = (weatherData.current.condition.icon).slice(2);
    const feelsLikeF = weatherData.current.feelslike_f.toFixed(0);
    const feelsLikeC = weatherData.current.feelslike_c.toFixed(0);
    const {humidity} = weatherData.current;
    const precipIn = weatherData.current.precip_in;
    const precipMM = weatherData.current.precip_mm;
    weatherFactory(location, isDay, cloud, tempF, tempC, condition, conditionIcon, feelsLikeF, feelsLikeC, humidity, precipIn, precipMM);
    renderWeather();
  } catch(error) {
    console.log(error);
  }
};

export default getWeather;