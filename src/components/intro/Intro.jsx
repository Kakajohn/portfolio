import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactInfos from '../contactinfos/ContactInfos'
import { ProfilieCard } from '../card/ProfilieCard'
import Skills from '../skills/Skills'
import background from '../../assets/img/backgroundphoto.jpg'

const Intro = () => {
  const [content, setContent] = useState(false);

  const contentStatus = () => {
    setContent(prev => !prev)
  }
  return (
 <>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <h1 className=' text-center'><a href='#cont' className='skills'  onClick={contentStatus}>Welcome to George Kakazianis portfolio.</a></h1>
      <div class="carousel-item active">
        <img class="d-block w-100" src={background} alt="First slide">
        </img>
      </div>
    </div>
  </div>
  
   <div className={`${content ? "see" : "hide"}`} id='cont'>
   <ProfilieCard />
   <ContactInfos />
   <Skills />
   </div>
 </>
  )
}

export default Intro