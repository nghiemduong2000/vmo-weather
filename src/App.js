import { getWeather } from 'actions/weatherAction';
import Form from 'components/Form';
import Title from 'components/Title';
import Weather from 'components/Weather';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather('Hanoi', 'Vietnam'));
    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className='App'>
        <div className='fixed w-full z-1'>
          <Navbar />
          <Title />
        </div>
        <div className='appWrap w-full bg-opacity-50 bg-gradient-to-b from-orange-l to-white-custom'>
          <div className='body mx-auto'>
            <Form />
            <Weather />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
