import React, { useEffect, useState } from 'react';
import cities from './../../assets/current.city.list.json';

import { AutoComplete } from 'antd';

const Search = ({ fetchWeatherData }) => {
  const [citiesList, setCitiesList] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [cityId, setCityId] = useState('');

  useEffect(() => {
    setCitiesList(
      cities.map(({ name, country, id }) => ({
        value: `${name}, ${country}`,
        id,
      }))
    );
  }, [setCitiesList]);

  const handleButtonClick = () => {
    fetchWeatherData(cityId);
  };

  const handleSelect = (val) =>
    setCityId(filteredCities.filter((city) => city.value === val)[0].id);

  const handleSearch = (val) => {
    const value = val.toLowerCase();
    if (value.length > 2) {
      setFilteredCities(
        citiesList.filter((city) => city.value.toLowerCase().includes(value))
      );
    } else {
      setFilteredCities([]);
    }
  };

  return (
    <div className="search-container">
      <h1>Check the weather outside</h1>
      <AutoComplete
        className="select-input"
        placeholder="Type your city . . ."
        options={filteredCities}
        onSearch={handleSearch}
        onSelect={handleSelect}
      />
      <button className="button" onClick={handleButtonClick}>
        Find out!
      </button>
    </div>
  );
};
export default Search;
