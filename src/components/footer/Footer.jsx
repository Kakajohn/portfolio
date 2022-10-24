import React from 'react';
import links from '../../config/main-config.json';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import '../footer/_footer.scss';

/**
* @returns the footer of the project that contains the links for linkedin and github of the user.
*/

const Footer = () => {
return (
<footer className='footer'>
  <div className='container'>
    {links.social.map((item,index)=>{
    return <div key={index} className='text-center'>
      <a href={item.linkedin} target='_blank' rel='noreferrer'>
        <FaLinkedin className='bg-white linkedin' />
      </a>
      <a href={item.github} target='_blank' rel='noreferrer'>
        <FaGithubSquare className='bg-white git' />
      </a>
    </div>
    })}
  </div>
  <p className='m-1'> You can contact us at</p>
  {links.social.map((item,index)=>{
    return <a key={index} href={`mailto:${item.email}`}> {item.email} </a>
  })}
  <p> by Gkakazianis ❤</p>
</footer>
);
};

export default Footer;