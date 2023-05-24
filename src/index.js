import getWeather from './get-weather';
import './style.css';

const input = document.querySelector('.location');
const searchBtn = document.querySelector('.search');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const locationInput = input.value;
  input.value = '';
  getWeather(locationInput);
});