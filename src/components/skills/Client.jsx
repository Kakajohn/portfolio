import React, { useState } from 'react';
import data from '../../config/main-config.json';

/**
 * @param setStatus () => {} on Click of the button it changes the status. On true it displays the client side skills and on false it hides them. 
 * @returns the client side skills.
 */

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
  <div className={` ${client ? 'grid-container' : 'empty' }`}>
    <div className={` ${client ? 'container__progressbars' : 'empty' }`}>
      {data.client.map((cl, id) => {
      return (
      <div key={id} className='progressbar'>
        <svg className='progressbar__svg'>
          <circle cx='80' cy='80' r='70' className={`progressbar__svg-circle ${cl.class}` }>
            {' '}
          </circle>
        </svg>
        <span className={`progressbar__text ${cl.class2}`}>{cl.lang}</span>
      </div>
      );
      })}
    </div>
  </div>
</>
);
};

export default Client;