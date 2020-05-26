import React from 'react';

const WeatherInfo = ({ weatherData, setWeatherData }) => {
  const { name, weather, main } = weatherData;

  const setTemperaturePrecision = (num) => Number(num).toFixed(1);

  return (
    <div className="weather-container">
      <h1 className="header">Weather for {name}</h1>
      <div className="weather-box">
        <div className="graphic-box">
          <img
            className="graphic"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
            alt="Weather"
          />
        </div>

        <div className="weather-info">
          <h2>{weather[0].description}</h2>
          <p>Temperature: {setTemperaturePrecision(main.temp)} ℃</p>
          <p>
            Sensed temperature: {setTemperaturePrecision(main.feels_like)} ℃
          </p>
        </div>
      </div>
      <button className="button" onClick={() => setWeatherData({})}>
        Back to dashboard
      </button>
    </div>
  );
};
export default WeatherInfo;
