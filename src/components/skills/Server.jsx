import React, { useState } from 'react';
import data from '../../config/main-config.json';

/**
 * @param setStatus () => {} on Click of the button it changes the status. On true it displays the server side skills and on false it hides them. 
 * @returns the server side skills.
 */
const Server = () => {
const [server, setServer] = useState(false);

const setStatus = () => {
setServer(prev => !prev);
};


return (
<>
  <div className='text-center'>
    <button className='see-skills text-center' onClick={setStatus}>
      <span className='circle' aria-hidden='true'>
        <span className='icon arrow'></span>
      </span>
      <span className='button-text text-white'>Server side</span>
    </button>
  </div>
  <div className={` ${server ? 'grid-container' : 'empty' }`}>
    <div className={` ${server ? 'container__progressbars' : 'empty' }`}>
      {data.server.map((se, id) => {
      return (
      <div key={id} className='progressbar'>
        <svg className='progressbar__svg'>
          <circle cx='80' cy='80' r='70' className={`progressbar__svg-circle ${se.class}`}>
            {' '}
          </circle>
        </svg>
        <span className='progressbar__text shadow-node'>{se.lang}</span>
      </div>


      );
      })}
    </div>
  </div>
</>
);
};

export default Server;