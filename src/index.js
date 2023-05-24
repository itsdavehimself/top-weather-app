import getWeather from './get-weather';
import searchIcon from './magnify.svg';
import './style.css';

const input = document.querySelector('.location');
const searchBtn = document.querySelector('.search');
const search = document.createElement('img');
search.classList.add('search-icon');
search.src = searchIcon;
searchBtn.appendChild(search);


searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const locationInput = input.value;
  input.value = '';
  input.blur();
  getWeather(locationInput);
});