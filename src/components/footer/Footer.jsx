import React from 'react'
import {FaGithubSquare,FaLinkedin} from "react-icons/fa";
import '../footer/_footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
     <div className="container">
      <div className="text-center">
      <a href="https://www.linkedin.com/in/george-kakazianis-24ba97224/"><FaLinkedin /></a>
      <a href="https://github.com/Kakajohn"><FaGithubSquare /></a>
      </div>
     </div>
      You can contact us at
      <a href='mailto:gkakazianes@gmail.com'>gkakazianes@gmail.com</a> 
      by Gkakazianis ❤
    </footer>
  )
}

export default Footer