import React, { useState } from 'react';
import data from '../../config/main-config.json';

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
      {data.server.map((se, id) => {
        return (
          <div key={id} className={` ${server ? 'grid-container' : 'empty'}`}>
            <div className={` ${server ? 'container__progressbars' : 'empty'}`}>
              <div className='progressbar'>
                <svg className='progressbar__svg'>
                  <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-node shadow-node'>
                    {' '}
                  </circle>
                </svg>
                <span className='progressbar__text shadow-node'>{se.server1}</span>
              </div>

              <div className='progressbar'>
                <svg className='progressbar__svg'>
                  <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-express shadow-express'>
                    {' '}
                  </circle>
                </svg>
                <span className='progressbar__text shadow-express'>{se.server2}</span>
              </div>
              <div className='progressbar'>
                <svg className='progressbar__svg'>
                  <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-ajax shadow-ajax'>
                    {' '}
                  </circle>
                </svg>
                <span className='progressbar__text shadow-ajax'>{se.server3}</span>
              </div>
              <div className='progressbar'>
                <svg className='progressbar__svg'>
                  <circle cx='80' cy='80' r='70' className='progressbar__svg-circle circle-mongodb shadow-mongodb'>
                    {' '}
                  </circle>
                </svg>
                <span className='progressbar__text shadow-mongodb'>{se.server4}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Server;
