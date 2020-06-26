import React from 'react'
import ContactUs from '../../components/ContactUs/ContactUs'
import Iso from '../../images/iso.png'
import Iso2 from '../../images/iso2.png'
import './Contact.css'

const Contact = () => {
  return (
    <div>
    
      <div className='contact_title_container'>
        <div className='contact_title'>Contact Us</div>
        <div className='contact_description'>Our goal is to provide the highest level of quality</div>
        <div className='contact_iso_container'>
          <img src={Iso} alt='iso certificate' className='contact_iso'></img>
          <img src={Iso2} alt='iso certificate' className='contact_iso'></img>
        </div>
      </div>
    
      <div className='contactus'>
       <ContactUs />
      </div>
    </div>
  )
}

export default Contact
