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

  const URL = 'George-Kakazianis-CV.pdf';

  const setDownload = () => {
    // method to get PDF file
    fetch(URL).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'George-Kakazianis-CV.pdf';
            alink.click();
        })
    })
}

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
      <button className='cv' onClick={setDownload}>Click to download my CV</button>
      <Social />
    </div>
  </div>
</>
);
};