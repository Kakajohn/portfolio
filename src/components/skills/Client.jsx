import React, { useState } from 'react';
import data from '../../config/main-config.json';

const Client = () => {
const [client, setClient] = useState(false);

const handleStatus = () => {
setClient(prev => !prev);
};

return (
<>
  <div className='text-center'>
    <button className='see-skills text-center' onClick={handleStatus}>
      <span className='circle' aria-hidden='true'>
        <span className='icon arrow'></span>
      </span>
      <span className='button-text text-white'>Client side</span>
    </button>
  </div>
  {data.client.map((cl, id) => {
  return (
  <div key={id} className={` ${client ? 'grid-container' : 'empty' }`}>
    <div className={` ${client ? 'container__progressbars' : 'empty' }`}>
      <div className='progressbar'>
        <svg className='progressbar__svg'>
          <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-html shadow-html'>
            {' '}
          </circle>
        </svg>
        <span className='progressbar__text shadow-html'>{cl.client1}</span>
      </div>

      <div className='progressbar'>
        <svg className='progressbar__svg'>
          <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-css shadow-css'>
            {' '}
          </circle>
        </svg>
        <span className='progressbar__text shadow-css'>{cl.client2}</span>
      </div>

      <div className='progressbar'>
        <svg className='progressbar__svg'>
          <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-scss shadow-scss'>
            {' '}
          </circle>
        </svg>
        <span className='progressbar__text shadow-scss'>{cl.client3}</span>
      </div>

      <div className='progressbar'>
        <svg className='progressbar__svg'>
          <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-scss shadow-scss'>
            {' '}
          </circle>
        </svg>
        <span className='progressbar__text shadow-scss'>{cl.client4}</span>
      </div>

      <div className='progressbar'>
        <svg className='progressbar__svg'>
          <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-js shadow-js'>
            {' '}
          </circle>
        </svg>
        <span className='progressbar__text shadow-js'>{cl.client5}</span>
      </div>

      <div className='progressbar'>
        <svg className='progressbar__svg'>
          <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-react shadow-react'>
            {' '}
          </circle>
        </svg>
        <span className='progressbar__text shadow-react'>{cl.client6}</span>
      </div>

      <div className='progressbar'>
        <svg className='progressbar__svg'>
          <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-react shadow-react'>
            {' '}
          </circle>
        </svg>
        <span className='progressbar__text shadow-react'>{cl.client7}</span>
      </div>
    </div>
  </div>
  );
  })}
</>
);
};

export default Client;