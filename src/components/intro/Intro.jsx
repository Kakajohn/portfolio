import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../../assets/img/backgroundphoto.jpg';
import './intro.css'
/**
 * @returns the background top image.
 */

const Intro = () => {
return (
<>
  <div id='carouselExampleSlidesOnly' className='carousel slide ' data-ride='carousel'>
    <div className='carousel-inner'>
      <div className='carousel-item active'>
        <img className='d-block w-100' src={background}  alt='background' />
      </div>
    </div>
  </div>
</>
);
};

export default Intro;