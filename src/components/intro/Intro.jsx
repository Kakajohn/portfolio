import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import background from '../../assets/img/backgroundphoto.jpg'
const Intro = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src={background} alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="..." alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="..." alt="Third slide"/>
      </div>
    </div>
  </div>
  )
}

export default Intro