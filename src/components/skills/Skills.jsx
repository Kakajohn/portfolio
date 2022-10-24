import React from 'react';
import './_skils.scss';
import './_skillsbutton.scss';
import Client from './Client';
import Server from './Server';

/**
 * @returns the client side and server side skills.
 */

const Skills = () => {
 
  return (
    <>
    <h1 className='text-center text-white'>My skills</h1>
    <Client />
    <Server />
    </>
  );
};

export default Skills;
