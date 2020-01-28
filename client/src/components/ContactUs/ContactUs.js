import React from 'react'
import Form from './../Form/Form' 
import './ContactUs.css'

const ContactUs = () => {

  return (
    <>
      <div className='contact_us_container'>
        <div className='info_container'>
          <div className='contact_us_title'>Contact Us</div>
          <div className='florida_address'>
            <div className='state'>Florida </div>
            <div className='address'>12429 NW 25th Street </div>
            <div className='street'>Coral Springs, FL 33065</div>
          </div>

          <div className='california_address'>
            <div className='state'>California </div>
            <div className='address'>15171 Springdale Street</div>
            <div className='street'>Huntington Beach, CA 92649</div>
          </div>

          <div className='email_phone_fax'>
            <div>info@revanixbiomedical.com </div>
            <div>Phone: (754) 529-8383</div>
            <div>Fax: (754) 529-8384</div>
          </div>
        </div>

        <div className='contact_form'>
          <Form/>
        </div>

    </div>
    </>
  )
}

export default ContactUs 
