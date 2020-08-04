import React from 'react'
import Teaching from './teaching.jpg'
import { Spring } from 'react-spring/renderprops'
import './Education.css'

function Education () {

  function animation(title) {
    return <Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    config={{ delay: 1000, duration: 1000 }}
    >
    { props => ( <div style={props} >{title}</div> )}
    </Spring>
  }

  return (
    <div>
      <div className='top_title_container'>
        <div className='top_title'>Education</div>
      </div>

      <div className='contact_help_container'>
        <div className='contact_help_img_container'> 
          <img src={Teaching} alt='equipment repair' className='contact_help_img'></img>
        </div>

        <div className='contact_text_container'>
          <div className='contact_text_title'>{animation('Education Matters')}</div>
          <div className='contact_text_description'>Revanix Biomedical offers CE Credits -  Educate care and handling of surgical equipment included with Preventive Maintenance Services.</div>
        </div>
      </div>
    </div>
  )
}

export default Education 
