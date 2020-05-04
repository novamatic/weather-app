import React, { useEffect, useState } from 'react';
import cities from './../../assets/current.city.list.json';

const Search = () => {
  const [citiesList, setCitiesList] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  useEffect(() => {
    setCitiesList(cities.map(({ name, country }) => `${name}, ${country}`));
  }, [setCitiesList]);

  const fetchWeatherData = () => {
    console.log(citiesList);
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    if (value.length > 2) {
      setFilteredCities(
        citiesList.filter((city) => city.toLowerCase().includes(value))
      );
    }
  };

  return (
    <div className="search-container">
      <h1>Check the weather outside</h1>
      <input
        type="text"
        placeholder="Type your city . . ."
        onChange={(e) => handleChange(e)}
      />
      <button onClick={fetchWeatherData}>Find out!</button>
    </div>
  );
};
export default Search;
