import Loading from 'components/Loading';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SubmainDetail from './components/SubmainDetail';
import addZeroToMinus from './features/addZeroToMinus';
import setStateWeather from './features/setStateWeather';
import './style.scss';

const Weather = () => {
  const weather = useSelector((state) => state.weather.weather);
  const loading = useSelector((state) => state.weather.loading);

  const [state, setState] = useState({
    name: '',
    dt: '',
    temp: '',
    temp_max: '',
    temp_min: '',
    feels_like: '',
    description: '',
    wind_speed: '',
    humidity: '',
    pressure: '',
    visibility: '',
    cloud: '',
    sunrise: '',
    sunset: '',
    icon: '',
  });

  useEffect(() => {
    setState((newState) => setStateWeather(weather));
  }, [weather]);

  return (
    <div className='weather'>
      {loading ? (
        <Loading className='h-28 w-28' />
      ) : (
        <Fragment>
          <div className='weather__main flex justify-between items-center mt-8 bg-gradient-to-b from-orange to-orange-md rounded-2xl shadow-custom'>
            <div className='weather__main-left h-full flex flex-col justify-between text-white '>
              <span className='weather__main-left-local font-bold'>{`Thời tiết ${state.name}`}</span>
              <span className='weather__main-left-time opacity-80'>{`Kể từ ${state.dt} phút`}</span>
              <span className='weather__main-left-temp font-bold'>
                {state.temp}
              </span>
              <span className='weather__main-left-desc font-bold'>{`Có ${state.description}`}</span>
            </div>
            <div className='weather__main-right flex flex-col items-center relative'>
              <img src={state.icon} alt='' />
              <span className='font-bold text-white absolute'>
                {state.temp_max_min}
              </span>
            </div>
          </div>
          <div className='weather__submain mt-8 flex flex-col bg-white py-6 px-4 rounded-2xl shadow-custom text-gray-800'>
            <div className='weather__submain-feelsLike flex flex-col items-center py-6'>
              <h3 className='font-bold'>{state.feels_like}</h3>
              <span>Cảm giác như</span>
            </div>
            <SubmainDetail addZeroToMinus={addZeroToMinus} weather={state} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Weather;
