import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import '../footer/_footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='text-center'>
          <a href='https://www.linkedin.com/in/george-kakazianis-24ba97224/'>
            <FaLinkedin className='bg-white linkedin' />
          </a>
          <a href='https://github.com/Kakajohn'>
            <FaGithubSquare className='bg-white git' />
          </a>
        </div>
      </div>
      <p> You can contact us at</p>
      <a href='mailto:gkakazianes@gmail.com'>gkakazianes@gmail.com</a>
      <p> by Gkakazianis ❤</p>
    </footer>
  );
};

export default Footer;
