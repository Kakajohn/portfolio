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
    <div className='text-center'>
      <a href={links.social.linkedin} target='_blank'>
        <FaLinkedin className='bg-white linkedin' />
      </a>
      <a href={links.social.github} target='_blank'>
        <FaGithubSquare className='bg-white git' />
      </a>
    </div>
  </div>
  <p> You can contact us at</p>
  <a href={`mailto:${links.social.email}`} > {links.social.email} </a>
  <p> by Gkakazianis ❤</p>
</footer>
);
};

export default Footer;