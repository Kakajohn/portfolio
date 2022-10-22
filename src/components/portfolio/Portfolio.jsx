import React, { useState } from 'react';
import ContactInfos from '../contactinfos/ContactInfos';
import Footer from '../footer/Footer';
import './_portfolio.scss';
import Intro from '../intro/Intro';
import { ProfilieCard } from '../card/ProfilieCard';
import Skills from '../skills/Skills';
import './_portfolio.scss';

const Portfolio = () => {
  const [content, setContent] = useState(false);

  const contentStatus = () => {
    setContent(prev => !prev);
  };

  return (
    <>
      {/*
    *ugly patch for viewing the content
    //FIXME: change the header and button position. 
     */}
      <h1 className='m-1 p-1 text-center'>
        <button className='skills'>Hello and welcome to my portfolio.</button>
      </h1>
      <div className='text-center'>
        <button style={{ color: '#fff' }} onClick={contentStatus}>
          View my portfolio
        </button>
      </div>
      <Intro />
      <div className={`${content ? 'see' : 'hide'}`} id='cont'>
        <ProfilieCard />
        <ContactInfos />
        <Skills />
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
