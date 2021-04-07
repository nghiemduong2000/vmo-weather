import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  return (
    <div className='navbar-wrap w-full shadow-lg flex items-center justify-center bg-white'>
      <div className='navbar container flex justify-center'>
        <Link to='/' className='navbar__logo flex items-end'>
          <img
            src='https://res.cloudinary.com/nghiemduong2000/image/upload/v1617455478/logoVMO-Black_lebi0m.png'
            alt=''
            className='w-64'
          />
          <span className='text-orange font-bold relative'>
            Weather
            <FontAwesomeIcon icon={faSun} className='absolute' />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
