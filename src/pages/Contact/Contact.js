import React from 'react'
import Map from '../../components/Map/Map'
import FormBox from '../../components/Form/Form'
import Iso from '../../images/iso.png'
import Iso2 from '../../images/iso2.png'
import './Contact.css'

const Contact = () => {
  let flLat = 26.269711
  let flLong = -80.260872
  let caLat = 33.740570
  let caLong = -118.024520
  return (
    <div>
    
      <div className='top_title_container'>
        <div className='top_title'>Contact Us</div>
        <div className='top_description'>Our goal is to provide the highest level of quality</div>
        <div className='contact_iso_container'>
          <img src={Iso} alt='iso certificate' className='contact_iso'></img>
          <img src={Iso2} alt='iso certificate' className='contact_iso'></img>
        </div>
      </div>
    
      <div className='contact_us'>
      <div className='contact_us_container_page'>
        <div className='info_container'>
          <div className='florida_address'>
            <div className='state'>World Headquarters</div>
            <div className='contact_us_line_page'></div>
            <div className='address'>10139 NW 31st Street, Suite 102</div>
            <div className='street'>Coral Springs, FL 33065</div>
            <Map latitude={flLat} longitude={flLong}/>

          </div>

          <div className='california_address'>
            <div className='state'>West Coast Zone Office </div>
            <div className='contact_us_line_page'></div>
            <div className='address'>15171 Springdale Street</div>
            <div className='street'>Huntington Beach, CA 92649</div>
            <Map latitude={caLat} longitude={caLong}/>
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
      </div>
    </div>
  )
}

export default Contact
