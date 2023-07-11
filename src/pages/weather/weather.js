import React, { useState, useEffect } from 'react';
import '../../styles/css/weather/weather.css';
import SearchForm from '../../components/weather/SearchForm';

function Weather() {
  return (
    <div>
      <h1>Ma météo</h1>
      <SearchForm />
    </div>
  );
}

export default Weather;
