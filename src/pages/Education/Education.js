import React from 'react'
import Repair from '../../images/equipment.jpg'

function Education () {
  return (
    <div>
      <div className='career_header_container'>
        <div className='career_title'>Education</div>
      </div>

      <div className='contact_help_container'>
        <div className='contact_help_img_container'> 
          <img src={Repair} alt='equipment repair' className='contact_help_img'></img>
        </div>

        <div className='contact_text_container'>
          <div className='contact_text_title'>Education Matters</div>
          <div className='contact_text_description'>Revanix Biomedical offers CE Credits -  Educate care and handling of surgical equipment included with Preventive Maintenance Services.</div>
        </div>
      </div>
    </div>
  )
}

export default Education 
