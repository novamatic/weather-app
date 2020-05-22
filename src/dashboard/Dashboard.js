import React, { useState } from 'react';
import { fetchCurrentWeatherByID } from '../weather-service/weather-service';
import Search from '../data-wrapper/search/Search';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState({});

  const fetchWeatherData = (id) => {
    fetchCurrentWeatherByID(id);
  };

  return (
    <div className="main-container">
      <div className="data-wrapper-container">
        <Search fetchWeatherData={fetchWeatherData} />
      </div>
    </div>
  );
};

export default Dashboard;
