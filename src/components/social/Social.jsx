import React from 'react'
import data from '../../config/main-config.json'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Social = () => {
return (
<div>
    {data.social.map((accounts, id) => {
    return <div key={id}>
        <div className='text mt-3' key={id}>
        </div>
        <div className='gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center'>
            <a href={accounts.linkedin}>
                <FaLinkedin />
            </a>
            <a href={accounts.github}>
                <FaGithubSquare />
            </a>
        </div>
    </div>
    })}
</div>
)
}

export default Social