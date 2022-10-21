import React, {useState} from 'react'
import ContactInfos from '../contactinfos/ContactInfos'
import Footer from '../footer/Footer'
import './_portfolio.scss'
import Intro from '../intro/Intro'
import { ProfilieCard } from '../card/ProfilieCard'
import Skills from '../skills/Skills'
import './_portfolio.scss'

const Portfolio = () => {

  const [content, setContent] = useState(false);

  const contentStatus = () => {
    setContent(prev => !prev)
  }

  return (
    <>
     <h1 className='m-1 p-1 text-center'><button className='skills'  onClick={contentStatus}>Hello and welcome to my portfolio.</button></h1>
     <Intro />
     <div className={`${content ? "see" : "hide"}`} id='cont'>
     <ProfilieCard />
     <ContactInfos />
     <Skills />
     </div>
    <Footer />
    </>
  )
}

export default Portfolio