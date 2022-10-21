import React from 'react'
import profilephot from '../../assets/img/sample.jpg'
import Profile from '../profile/Profile'
import './_profilecard.scss'
import data from '../../config/main-config.json'
import {FaGithubSquare,FaLinkedin} from "react-icons/fa";

export const ProfilieCard = () => {

  return (
       <>
    <div className="container -m3-8 p-3 d-flex justify-content-left">
     <div className="card p-4"> 
        <div className=" image d-flex flex-column justify-content-left align-items-left">
            <div className="container">
            <img src={profilephot} height="150" width="150" className='rounded' alt='profile'/>
            </div>    
           {data.profile.map((item,index)=>{
           return( <>
             <span key={index} className="name mt-3">Hello my name is {item.name} {item.lastname}</span>
             <span className="idd">i am a {item.profession}</span> 
             <span className="idd">Graduated at {item.education} department of Informatics.</span> 
             <span>{item.about}</span>
             <span className="idd">You can contact me at {item.contact}</span> 
            </>)
           })}
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <span><i className="fa fa-copy"></i></span>
                    </div> 
                    <div className=" d-flex mt-2"> 
                    </div> 
                    <div className="text mt-3">
                        <span>Also feel free to visit my Github and Linkedin accounts.</span>
                        </div>
                        <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> 
                        <a href="https://www.linkedin.com/in/george-kakazianis-24ba97224/"><FaLinkedin /></a>
                        <a href="https://github.com/Kakajohn"><FaGithubSquare /></a>
                        </div>
                            <div className=" px-2 rounded mt-4 date ">
                        </div>
                    </div>
                    </div>
                   <Profile />
                </div>
       </>
  )
}
