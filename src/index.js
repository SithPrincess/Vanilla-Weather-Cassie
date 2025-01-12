function updateWeatherDetails(response) {
  let temperatureCurrent = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityCurrent = document.querySelector("#current-city");
  cityCurrent.innerHTML = response.data.city;
  temperatureCurrent.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "355o03d48211t632342b7f4c029b7a0f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateWeatherDetails);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity = searchInput.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Gatlinburg");
