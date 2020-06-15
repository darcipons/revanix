import React from 'react'
import FormBox from './../Form/Form' 
import './ContactUs.css'

const ContactUs = () => {

  return (
    <>
      <div className='contact_us_container'>
        <div className='info_container'>
          <div className='florida_address'>
            <div className='state'>World Headquarters</div>
            <div className='contact_us_line'></div>
            <div className='address'>10139 NW 31st Street, Suite 102</div>
            <div className='street'>Coral Springs, FL 33065</div>
          </div>

          <div className='california_address'>
            <div className='state'>West Coast Zone Office </div>
            <div className='contact_us_line2'></div>
            <div className='address'>15171 Springdale Street</div>
            <div className='street'>Huntington Beach, CA 92649</div>
          </div>

          <div className='email_phone_fax'>
            <div>info@revanixbiomedical.com </div>
            <div>Toll Free: 1 (844) 308-2550</div>
            <div>Phone: (754) 529-8383</div>
            <div>Fax: (754) 529-8384</div>
          </div>
        </div>

        <div className='contact_form'>
          <FormBox />
        </div>

    </div>
    </>
  )
}

export default ContactUs 
