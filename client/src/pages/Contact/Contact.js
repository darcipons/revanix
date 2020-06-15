import React from 'react'
import ContactUs from '../../components/ContactUs/ContactUs'
import CustomerSupport from './customer-service.jpg'
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

      <div className='contact_help_container'>
        <div className='contact_help_img_container'> 
          <img src={CustomerSupport} alt='woman on phone' className='contact_help_img'></img>
        </div>

        <div className='contact_text_container'>
          <div className='contact_text_title'>We're Here to Help!</div>
          <div className='contact_text_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Quisque non tellus orci ac auctor augue. Aliquam etiam erat velit scelerisque.</div>
        </div>
      </div>
    
      <div className='contactus'>
       <ContactUs />
      </div>
    </div>
  )
}

export default Contact
