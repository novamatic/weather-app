import React, { useEffect, useState } from 'react';
import cities from './../../assets/current.city.list.json';

import { Select } from 'antd';

const Search = () => {
  const [citiesList, setCitiesList] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    setCitiesList(cities.map(({ name, country }) => `${name}, ${country}`));
  }, [setCitiesList]);

  const fetchWeatherData = () => {
    console.log(citiesList);
  };

  const handleChange = (val) => {
    const value = val.toLowerCase();
    console.log(value);
    if (value.length > 2) {
      setFilteredCities(
        citiesList.filter((city) => city.toLowerCase().includes(value))
      );
    }
  };

  return (
    <div className="search-container">
      <h1>Check the weather outside</h1>
      <Select showSearch onChange={handleChange}>
        {citiesList.map((city) => (
          <Select.Option key={city}>{city}</Select.Option>
        ))}
      </Select>
      <button onClick={fetchWeatherData}>Find out!</button>
    </div>
  );
};
export default Search;
