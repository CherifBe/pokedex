import { useState } from 'react';
import getQuery from '../../service/axios';
import WeatherDisplay from './WeatherDisplay';

function SearchForm() {
  const API_KEY = '44df2c0603e5160dd8d9fedccf1e5f6e';
  const [data, setData] = useState(null);

  const findData = async () => {
    const city = document.getElementById('search-city').value;
    const query =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=' +
      API_KEY +
      '&units=metric';
    const response = await getQuery(query);
    setData(response);
  };

  return (
    <div>
      <div className="container-weather">
        <div className="search-bar">
          <input
            type="text"
            id="search-city"
            placeholder="Vous souhaitez connaitre la météo de quelle ville ? (Paris, Londres, New-York...)"
          />
        </div>
        <div className="btn-submit">
          <div onClick={findData}>
            Search
          </div>
        </div>
      </div>
      {data ? (
        <WeatherDisplay weatherData={data} />
      ) : (
        <div>
          Cherchez une ville pour avoir ses informations météorologiques
        </div>
      )}
    </div>
  );
}

export default SearchForm;
