import React from 'react'
import ContactInfos from '../contactinfos/ContactInfos'
import Footer from '../footer/Footer'
import './_portfolio.scss'
import Intro from '../intro/Intro'
import { ProfilieCard } from '../card/ProfilieCard'

const Portfolio = () => {
  return (
    <>
    <Intro />
    <ProfilieCard />
    <ContactInfos />
    <Footer />
    </>
  )
}

export default Portfolio