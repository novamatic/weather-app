const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const fetchCurrentWeatherByID = (id) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${OPEN_WEATHER_API_KEY}`
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
