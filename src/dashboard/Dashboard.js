import React, { useState } from 'react';
import { fetchCurrentWeatherByID } from '../weather-service/weather-service';
import Search from '../data-wrapper/search/Search';
import { isObjEmpty } from '../utils/utils';
import WeatherInfo from '../data-wrapper/weather-info/WeatherInfo';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState({});

  const fetchWeatherData = (id) => {
    fetchCurrentWeatherByID(id, setWeatherData);
  };
  return (
    <div className="main-container">
      <div className="data-wrapper-container">
        {isObjEmpty(weatherData) ? (
          <Search fetchWeatherData={fetchWeatherData} />
        ) : (
          <WeatherInfo
            weatherData={weatherData}
            setWeatherData={setWeatherData}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
