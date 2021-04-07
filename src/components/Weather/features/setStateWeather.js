import addZeroToMinus from './addZeroToMinus';
import typeofUndefined from './typeofUndefined';

const setStateWeather = (weather) => {
  const convertHoursToLocalTime = (value) => {
    const GMT = -new Date().getTimezoneOffset() / 60;
    let hours = value.getHours() - GMT + weather.timezone / 3600;
    if (value.getDate() > new Date().getDate() || hours < 0) {
      hours += 24;
    }
    return hours;
  };

  return {
    // Name city
    name: typeofUndefined(weather.name),
    // Time of data calculation
    dt: `${typeofUndefined(
      convertHoursToLocalTime(new Date(weather.dt * 1000))
    )}:${typeofUndefined(
      addZeroToMinus(new Date(weather.dt * 1000).getMinutes())
    )}`,
    // Current temp
    temp: `${typeofUndefined(Math.round(weather.main?.temp))}°`,
    // Temp max/min
    temp_max_min: `${typeofUndefined(
      Math.round(weather.main?.temp_max)
    )}/${typeofUndefined(Math.round(weather.main?.temp_min))}°`,
    // Feels like
    feels_like: `${typeofUndefined(Math.round(weather.main?.feels_like))}°`,
    // Description
    description: typeofUndefined(weather.weather?.[0].description),
    // Wind speed
    wind_speed: `${typeofUndefined(weather.wind?.speed)} km/h`,
    // Humidity
    humidity: `${typeofUndefined(weather.main?.humidity)}%`,
    // Pressure
    pressure: `${typeofUndefined(weather.main?.pressure)} mb`,
    // Visibility
    visibility: `${typeofUndefined(weather.visibility / 1000)} km`,
    // Clouds
    clouds: `${typeofUndefined(weather.clouds?.all)}%`,
    // Sunrise
    sunrise: `${typeofUndefined(
      convertHoursToLocalTime(new Date(weather.sys?.sunrise * 1000))
    )}:${typeofUndefined(
      addZeroToMinus(new Date(weather.sys?.sunrise * 1000).getMinutes())
    )} phút`,
    // Sunset
    sunset: `${typeofUndefined(
      convertHoursToLocalTime(new Date(weather.sys?.sunset * 1000))
    )}:${typeofUndefined(
      addZeroToMinus(new Date(weather.sys?.sunset * 1000).getMinutes())
    )} phút`,
    icon: `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`,
  };
};

export default setStateWeather;
