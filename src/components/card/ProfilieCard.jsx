import React from 'react'
import profilephot from '../../assets/img/sample.jpg'
import Profile from '../profile/Profile'

export const ProfilieCard = () => {
  return (
    <div className="-mt-11 container p-3 d-flex justify-content-left">
     <div className="card p-4"> 
        <div className=" image d-flex flex-column justify-content-left align-items-left">
            <div className="container">
            <img src={profilephot} height="150" width="150" className='rounded'/>
            </div>    
            <span className="name mt-3">George Kakazianis</span>
            <span className="idd">gkakazianes@gmail.com</span> 
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <span><i className="fa fa-copy"></i></span>
                    </div> 
                    <div className=" d-flex mt-2"> 
                    </div> 
                    <div className="text mt-3">
                        <span>George Kakazianis is a Frontend Developer.</span>
                        </div>
                        <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> 
                            <span><i className="fa fa-instagram"></i></span>
                            <span><i className="fa fa-linkedin"></i></span> 
                        </div>
                            <div className=" px-2 rounded mt-4 date ">
                        </div>
                    </div>
                    </div>
                   <Profile />
                </div>
  )
}
