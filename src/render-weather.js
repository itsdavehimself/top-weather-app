import { weatherArr } from "./weather-factory";

const weatherDiv = document.querySelector('.weather-info');
const humidityDiv = document.querySelector('.humidity-info');
const precipDiv = document.querySelector('.percipitation-info');

function renderWeather() {
  weatherDiv.replaceChildren();
  humidityDiv.replaceChildren();
  precipDiv.replaceChildren();
  const locationDisplay = document.createElement('p');
  locationDisplay.textContent = `${weatherArr[0].location}`;
  weatherDiv.appendChild(locationDisplay);
  const tempDisplay = document.createElement('p');
  tempDisplay.textContent = `${weatherArr[0].tempF}\u00B0 F`;
  weatherDiv.appendChild(tempDisplay);
  const conditionDisplay = document.createElement('p');
  conditionDisplay.textContent = `${weatherArr[0].condition}`
  weatherDiv.appendChild(conditionDisplay);
  const feelsLike = document.createElement('p');
  feelsLike.textContent = `Feels like ${weatherArr[0].feelsLikeF}\u00B0 F`;
  weatherDiv.appendChild(feelsLike);
  const humidityDisplay = document.createElement('p');
  humidityDisplay.textContent = `Humidity ${weatherArr[0].humidity}%`;
  humidityDiv.appendChild(humidityDisplay);
  const precipDisplay = document.createElement('p');
  precipDisplay.textContent = `Precipitation ${weatherArr[0].precipIn} in.`;
  precipDiv.appendChild(precipDisplay);
}

export default renderWeather;