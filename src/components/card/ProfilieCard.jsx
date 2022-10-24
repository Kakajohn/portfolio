import React from 'react';
import profilephot from '../../assets/img/sample.jpg';
import './_profilecard.scss';
import data from '../../config/main-config.json';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

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
          <span className='name mt-3'>Hello my name is {item.name} {item.lastname}</span>
          <span className='idd m-1'>i am a {item.profession}</span>
          <span className='idd'>
            Graduated at {item.education} department of {item.dpt}.
          </span>
          <span className='m-1'>{item.about}</span>
          <span className='idd m-1'>You can contact me at {item.contact}</span>
        </div>
        );
        })}
        {data.profile.map((accounts, id) => {
        return (
        <div key={id}>
          <div className='text mt-3' key={id}>
            <span>{accounts.visit}</span>
          </div>
          <div className='gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center'>
            <a href={accounts.linkedin}>
              <FaLinkedin />
            </a>
            <a href={accounts.github}>
              <FaGithubSquare />
            </a>
          </div>
        </div>
        );
        })}
      </div>
    </div>
  </div>
</>
);
};