import React, { useState } from 'react';
import { fetchCurrentWeatherByID } from '../weather-service/weather-service';
import Search from '../data-wrapper/search/Search';
import { isObjEmpty } from '../utils/utils';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState({});

  const fetchWeatherData = (id) => {
    fetchCurrentWeatherByID(id, setWeatherData);
  };

  console.log(weatherData);

  return (
    <div className="main-container">
      <div className="data-wrapper-container">
        {isObjEmpty(weatherData) ? (
          <Search fetchWeatherData={fetchWeatherData} />
        ) : (
          <p>Henlo</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
