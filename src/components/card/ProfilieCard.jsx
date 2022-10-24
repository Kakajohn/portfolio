import React from 'react';
import profilephot from '../../assets/img/sample.jpg';
import './_profilecard.scss';
import data from '../../config/main-config.json';
import Social from '../social/Social';

/**
 * @returns the profile card of the person that uses the template. 
 * Such as Name, Lastname, college etc. 
 */

export const ProfilieCard = () => {
return (
<>
  <div className='container -m3-8 p-3 d-flex justify-content-left'>
    <div className='card p-4'>
      <div className=' image d-flex flex-column justify-content-left align-items-left'>
        <div className='container'>
          <img src={profilephot} height='150' width='150' className='rounded' alt='profile' />
        </div>
        {data.profile.map((item, index) => {
        return (
        <div key={index}>
          <span className='name mt-3 m-1'>{item.info}</span>
        </div>
        );
        })}
      </div>
      <Social />
    </div>
  </div>
</>
);
};