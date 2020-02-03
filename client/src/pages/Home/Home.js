import React from 'react'
import ContactUs from './../../components/ContactUs/ContactUs'
import Iso from './iso.png'
import Chemist from './chemist.jpg'
import Seth2 from './steth2.jpg'
import Doctors from './doctors.jpg'
import Lab from './lab.jpg'
import Ca from './cali.png'
import Fl from './florida.png'
import Testimonial from './../../components/Testimonial/Testimonial'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='home_main_image'>
      <div className='home_intro_text'>
        <div className='home_intro_title'>Certified Medical Equipment Repairs</div>
        <div className='home_intro_location'>Located in California and Florida</div>
        {/* <img src={Ca} alt='california' className='state_icon'></img>
        <img src={Fl} alt='florida' className='state_icon'></img> */}
        <div className='home_intro_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </div>
        <div className='home_intro_iso'>
          <img src={Iso} alt='iso certificate' className='intro_iso'></img>
        </div>
      </div>
    </div>

    <div className='home_title'>What We Do</div>

    <div className='home_title_line'></div>

    <div className='services_container'>
      <div className='services_sub_container1'>
        <div className='services_icon1'>
          <i class="las la-shipping-fast la-5x"></i>
        </div>
        <div className='services_title1'>Ship Your Equipment</div>
        <div className='services_description1'>Ship your equipment to the closest one of our office locations. Once we receive your shipment we will contact you to inform you we received your equipment.</div>
      </div>

      <div className='services_sub_container2'>
        <div className='services_icon2'>
          <i class="las la-tools la-5x"></i>
        </div>
        <div className='services_title2'>Equipment Repair</div>
        <div className='services_description2'>Our Expert Medical Repair technicians will evaluate your equipment sent as well as analyze it. It will then get repaired and it will then get ready for shipment.</div>
      </div>

      <div className='services_sub_container3'>
        <div className='services_icon3'>
         <i class="las la-shipping-fast la-5x"></i>
        </div>
        <div className='services_title3'>Receive Your Equipment</div>
        <div className='services_description3'>Once your equipment is repaired, we will then ship our your equipment. You will receive your equipment as quick as possible for as little as to possible down time.</div>
      </div>

      <div className='services_sub_container4'>
          <div className='services_icon4'>
            <i class="las la-shield-alt la-5x"></i> 
          </div>
          <div className='services_title4'>Our Mission</div>
          <div className='services_description4'>Your equipment is secure and will receive the best repair services. We support most medical brands.</div>
      </div>
    </div>

    <div className='certified_container'>
        <div className='certified_mini_container1'>
          <img src={Doctors} alt='doctors' className='certified_image1'></img>
          <div className='certified_sub_container1'>
            <img src={Seth2} alt='medical equipment' className='certified_image2'></img>
            <div className='certified_description'>Our repair technicians are experts in repairing medical equipment hardware and software. Security is our priority and make sure our procedures a HIPAA safe.
            </div>
            
          </div>
        </div>

        <div className='certified_mini_container2'>
          <div className='certified_sub_container2'>
          <div className='certified_small_square'>
              <div className='certified_title'>Certified Repair Technicians</div>
              <img src={Iso} alt='iso certificate' className='certified_iso'></img>
            </div>
            <img src={Chemist} alt='chemist' className='certified_image2'></img>
          </div>
          <img src={Lab} alt='lab' className='certified_image1'></img>
        </div>

        {/* <button className='certified_button'>Get Started</button> */}
    </div>

    <div className='testimonial_title'>What Our Customers Are Saying</div>

    <div className='home_title_line'></div>
    
    <Testimonial/>

    <div className='contactus'>
      <ContactUs/>
    </div>
    </>
  )
}

export default Home
