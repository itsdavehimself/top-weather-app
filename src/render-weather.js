import { weatherArr } from "./weather-factory";

const mainDiv = document.querySelector('.main');
const weatherDiv = document.querySelector('.weather-info');
const humidityDiv = document.querySelector('.humidity-info');
const precipDiv = document.querySelector('.precipitation-info');
const toggleCelciusBtn = document.querySelector('.labels');
let isCelcius = false;

function renderWeather() {
  weatherDiv.replaceChildren();
  humidityDiv.replaceChildren();
  precipDiv.replaceChildren();
  const locationDisplay = document.createElement('p');
  const tempDiv = document.createElement('div');
  const tempDisplay = document.createElement('p');
  const conditionImg = document.createElement('img');
  const conditionDisplay = document.createElement('p');
  const feelsLike = document.createElement('p');
  const degree = document.createElement('p');
  const humidityTitle = document.createElement('p');
  const humidityDisplay = document.createElement('p');
  const precipTitle = document.createElement('p');
  const precipDisplay = document.createElement('p');

  tempDiv.classList.add('temp-div');
  locationDisplay.classList.add('location-title');
  tempDisplay.classList.add('temp-display');
  conditionDisplay.classList.add('condition-display');
  feelsLike.classList.add('feels-like');
  degree.classList.add('degrees');
  humidityTitle.classList.add('humidity-title');
  humidityDisplay.classList.add('humidity-display');
  precipTitle.classList.add('precipitation-title');
  precipDisplay.classList.add('precipitation-display');


  locationDisplay.textContent = `${weatherArr[0].location}`;
  conditionDisplay.textContent = `${weatherArr[0].condition}`
  humidityTitle.textContent = 'Humidity';
  humidityDisplay.textContent = `${weatherArr[0].humidity}%`
  conditionImg.classList.add('condition-img')
  conditionImg.src = `http://${weatherArr[0].conditionIcon}`;
  degree.textContent = `\u00B0`;

  if (!isCelcius) {
    tempDisplay.textContent = `${weatherArr[0].tempF}`;
    feelsLike.textContent = `Feels like ${weatherArr[0].feelsLikeF}\u00B0`;
    precipTitle.textContent = 'Precipitation';
    precipDisplay.textContent = `${weatherArr[0].precipIn} in.`;
  } else {
    tempDisplay.textContent = `${weatherArr[0].tempC}`;
    feelsLike.textContent = `Feels like ${weatherArr[0].feelsLikeC}\u00B0`;
    precipTitle.textContent = 'Precipitation';
    precipDisplay.textContent = `${weatherArr[0].precipMM} mm`;
  }

  if (weatherArr[0].isDay === 1) {
    mainDiv.classList.add('day');
  } else {
    mainDiv.classList.remove('day');
  }

  weatherDiv.appendChild(locationDisplay);
  weatherDiv.appendChild(tempDiv);
  tempDiv.appendChild(tempDisplay);
  tempDiv.appendChild(degree);
  weatherDiv.appendChild(conditionDisplay);
  weatherDiv.appendChild(conditionImg);
  weatherDiv.appendChild(feelsLike);
  humidityDiv.appendChild(humidityTitle);
  humidityDiv.appendChild(humidityDisplay);
  precipDiv.appendChild(precipTitle);
  precipDiv.appendChild(precipDisplay);
}

function changeCelcius() { 
  if(!isCelcius) {
    isCelcius = true;
    renderWeather();
  } else {
    isCelcius = false;
    renderWeather();
  }
}

toggleCelciusBtn.addEventListener('click', changeCelcius);


export default renderWeather;