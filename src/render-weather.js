import { weatherArr } from "./weather-factory";

const weatherDiv = document.querySelector('.weather-info');
const humidityDiv = document.querySelector('.humidity-info');
const precipDiv = document.querySelector('.percipitation-info');
const toggleCelciusBtn = document.querySelector('.toggle-cf');
let isCelcius = false;

function renderWeather() {
  weatherDiv.replaceChildren();
  humidityDiv.replaceChildren();
  precipDiv.replaceChildren();
  const locationDisplay = document.createElement('p');
  const tempDisplay = document.createElement('p');
  const conditionDisplay = document.createElement('p');
  const feelsLike = document.createElement('p');
  const humidityDisplay = document.createElement('p');
  const precipDisplay = document.createElement('p');

  if (!isCelcius) {
    tempDisplay.textContent = `${weatherArr[0].tempF}\u00B0 F`;
    feelsLike.textContent = `Feels like ${weatherArr[0].feelsLikeF}\u00B0 F`;
    precipDisplay.textContent = `Precipitation ${weatherArr[0].precipIn} in.`;
  } else {
    tempDisplay.textContent = `${weatherArr[0].tempC}\u00B0 C`;
    feelsLike.textContent = `Feels like ${weatherArr[0].feelsLikeC}\u00B0 C`;
    precipDisplay.textContent = `Precipitation ${weatherArr[0].precipMM} mm`;
  }

  locationDisplay.textContent = `${weatherArr[0].location}`;
  weatherDiv.appendChild(locationDisplay);
  weatherDiv.appendChild(tempDisplay);
  conditionDisplay.textContent = `${weatherArr[0].condition}`
  weatherDiv.appendChild(conditionDisplay);
  weatherDiv.appendChild(feelsLike);
  humidityDisplay.textContent = `Humidity ${weatherArr[0].humidity}%`;
  humidityDiv.appendChild(humidityDisplay);
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