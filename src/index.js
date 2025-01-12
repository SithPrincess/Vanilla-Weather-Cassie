function cityInput(city) {
  let apiKey = "355o03d48211t632342b7f4c029b7a0f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateWeatherDetails);
}

function searchSubmit(Event) {
  Event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityCurrent = document.querySelector("#current-city");
  cityCurrent.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
