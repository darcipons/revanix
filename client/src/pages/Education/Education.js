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
          <div className='contact_text_title'>{animation('On-Site Preventative Maintenance Training Program')}</div>
          <div className='contact_text_description'>Flexible and Rigid Endoscope training.</div>
          <div className='contact_text_description'>Training includes a complete explanation and demonstration of internal scope components, their most common repair problems, what causes them and what can be done to minimize the possibility of problems occurring. Our training expert also provides a detail review of suggested handling and processing techniques to minimize the possibility of incidental damage.</div>
        </div>
      </div>
    </div>
  )
}

export default Education 
