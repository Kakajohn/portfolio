import React, {useState} from 'react'
import './_skils.scss'

const Skills = () => {
  const [show, setShow] = useState(false);

  const handleStatus = () => {
    setShow(prev => !prev)
  }

  return (
    <>
      <h1 className='text-center'><a className='skills'  onClick={handleStatus}>Skills</a></h1>
      <div class={` ${show ? "grid-container" : "empty"}`}>
        <div class={` ${show ? "container__progressbars" : "empty"}`}>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
        </svg>
        <span class="progressbar__text shadow-html">HTML</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-css shadow-css"> </circle>
        </svg>
        <span class="progressbar__text shadow-css">CSS</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-scss shadow-scss"> </circle>
        </svg>
        <span class="progressbar__text shadow-scss">SCSS</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-scss shadow-scss"> </circle>
        </svg>
        <span class="progressbar__text shadow-scss">Bootstrap</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-js shadow-js"> </circle>
        </svg>
        <span class="progressbar__text shadow-js">JavaScript</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-react shadow-react"> </circle>
        </svg>
        <span class="progressbar__text shadow-react">React.js</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-node shadow-node"> </circle>
        </svg>
        <span class="progressbar__text shadow-node">Node.js</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-express shadow-express"> </circle>
        </svg>
        <span class="progressbar__text shadow-express">Express.js</span>
      </div>
      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-ajax shadow-ajax"> </circle>
        </svg>
        <span class="progressbar__text shadow-ajax">Ajax</span>
      </div>
      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-mongodb shadow-mongodb"> </circle>
        </svg>
        <span class="progressbar__text shadow-mongodb">MongoDB</span>
      </div>
</div>

</div>

<div id="main-container-social" class="main-container-social"></div>
    </>
  )
}

export default Skills