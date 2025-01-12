function searchSubmit(Event) {
  Event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityCurrent = document.querySelector("#current-city");
  cityCurrent.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateElement = document.querySelector(`#current-date`);
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
