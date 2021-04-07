import { GET_WEATHER } from './type';

export const getWeather = (city, country) => ({
  type: GET_WEATHER,
  data: { city, country },
});
