import { faSun as faSunRegular } from '@fortawesome/free-regular-svg-icons';
import {
  faCloud,
  faCompressArrowsAlt,
  faEye,
  faSun,
  faTemperatureHigh,
  faTint,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SubmainDetail = (props) => {
  const { weather } = props;

  const FormSubmainDetail = ({ icon, title, value }) => {
    return (
      <li className='weather__submain-detail-item flex justify-between border-t border-gray-200 py-4 px-2'>
        <div className='weather__submain-detail-item-left flex'>
          <div className='w-4rem flex justify-center items-center'>
            <FontAwesomeIcon icon={icon} className='mr-2' />
          </div>
          {title}
        </div>
        <div className='weather__submain-detail-item-right'>{value}</div>
      </li>
    );
  };

  return (
    <ul className='weather__submain-detail flex flex-wrap justify-between'>
      <FormSubmainDetail
        icon={faTemperatureHigh}
        title='Cao/Thấp'
        value={weather.temp_max_min}
      />
      <FormSubmainDetail icon={faWind} title='Gió' value={weather.wind_speed} />
      <FormSubmainDetail icon={faTint} title='Độ ẩm' value={weather.humidity} />
      <FormSubmainDetail
        icon={faCompressArrowsAlt}
        title='Áp suất'
        value={weather.pressure}
      />
      <FormSubmainDetail
        icon={faEye}
        title='Tầm nhìn'
        value={weather.visibility}
      />
      <FormSubmainDetail icon={faCloud} title='Có mây' value={weather.clouds} />
      <FormSubmainDetail
        icon={faSun}
        title='Bình minh'
        value={weather.sunrise}
      />
      <FormSubmainDetail
        icon={faSunRegular}
        title='Hoàng hôn'
        value={weather.sunset}
      />
    </ul>
  );
};

export default SubmainDetail;
