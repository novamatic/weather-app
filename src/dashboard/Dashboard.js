import React, { useState } from 'react';
import DataWrapper from '../data-wrapper/DataWrapper';
import Search from '../data-wrapper/search/Search';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState({});

  return (
    <div className="main-container">
      <DataWrapper>
        <Search />
      </DataWrapper>
    </div>
  );
};

export default Dashboard;
