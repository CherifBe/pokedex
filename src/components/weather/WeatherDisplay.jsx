function WeatherDisplay({ weatherData }) {
  console.log(weatherData.sys);
  let sunrise = new Date(weatherData.sys.sunrise);
  let sunset = new Date(weatherData.sys.sunset);
  return (
    <div className="weather-info">
      <h2>Météo à {weatherData.name}</h2>
      <div className="container-weather-page">
        <div>Température: {weatherData.main.temp} C°</div>
        <div>Température ressentie: {weatherData.main.feels_like} C°</div>
        <div>
          Max: {weatherData.main.temp_max} C° - Min: {weatherData.main.temp_min}{' '}
          C°
        </div>
        <div>Vent: {weatherData.wind.speed} km/h</div>
        <div>
          {weatherData.clouds.all < 20 ? (
            <p>Ciel dégagé</p>
          ) : (
            <p>Ciel nuageux</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
