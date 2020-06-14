import React, { useEffect, useState } from 'react';
import cities from './../../assets/current.city.list.json';

import { AutoComplete } from 'antd';

const Search = ({ fetchWeatherData }) => {
  const [citiesList, setCitiesList] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [cityId, setCityId] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setCitiesList(
      cities.map(({ name, country, id }) => ({
        value: `${name}, ${country}`,
        id,
      }))
    );
  }, [setCitiesList]);

  const handleButtonClick = () => {
    if (!cityId) {
      setError(true);
    } else {
      fetchWeatherData(cityId);
    }
  };

  const handleSelect = (val) => {
    setCityId(filteredCities.filter((city) => city.value === val)[0].id);
    setError(false);
  };

  const handleSearch = (val) => {
    setCityId('');
    const value = val.toLowerCase();
    if (val.length === 0) setError(false);

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
      {error ? (
        <span className="error-message">Please choose city from list</span>
      ) : null}
      <button className="button" onClick={handleButtonClick}>
        Find out!
      </button>
    </div>
  );
};
export default Search;
