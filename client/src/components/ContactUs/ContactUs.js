import React from 'react'
import Form from './../Form/Form' 
import './ContactUs.css'

const ContactUs = () => {

  return (
    <>
      <div className='contact_us_container'>
        <div className='info_container'>
          <div>Contact Us</div>
          <div>Florida 12429 NW 25th St. Coral Springs, FL 33065</div>
          <div>California 15171 Springdale Street Huntington Beach, CA 92649</div>
          <div>info@revanixbiomedical.com Phone: (754) 529-8383 Fax: (754) 529-8384</div>
        </div>

        <div className='contact_form'>
          <Form/>
        </div>

    </div>
    </>
  )
}

export default ContactUs 
