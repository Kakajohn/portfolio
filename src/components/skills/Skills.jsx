import React, { useState } from 'react';
import data from '../../config/main-config.json';
import './_skils.scss';
import './_skillsbutton.scss';

const Skills = () => {
  const [show, setShow] = useState(false);

  const handleStatus = () => {
    setShow(prev => !prev);
  };

  return (
    <>
      <div className='text-center'>
        <button className='see-skills text-center' onClick={handleStatus}>
          <span className='circle' aria-hidden='true'>
            <span className='icon arrow'></span>
          </span>
          <span className='button-text'>My skills</span>
        </button>
      </div>
      <div className={` ${show ? 'grid-container' : 'empty'}`}>
        <div className={` ${show ? 'container__progressbars' : 'empty'}`}>
          {data.client.map((cl, id) => {
            return (
              <>
                <div key={id} className='progressbar'>
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
              </>
            );
          })}

          {data.server.map((se, id) => {
            return (
              <>
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
              </>
            );
          })}
        </div>
      </div>

      <div id='main-container-social' className='main-container-social'></div>
    </>
  );
};

export default Skills;
