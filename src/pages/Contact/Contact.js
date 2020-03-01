import React from 'react'
import ContactUs from '../../components/ContactUs/ContactUs'
import './Contact.css'

const Contact = () => {
  return (
    <div>
    
        <div className='contact_title_container'>
          <div className='contact_title'>Contact Us</div>
          <div className='contact_description'>The World Leader in Biomedical and Surgical Repairs</div>
        </div>
    
      <div className='contactus'>
      <ContactUs />
      </div>
    </div>
  )
}

export default Contact
