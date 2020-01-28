import React from 'react'
import ContactUs from './../../components/ContactUs/ContactUs'
import Iso from './iso.png'
import Chemist from './chemist.jpg'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='home_main_image'>
      <div className='home_intro_text'>
        <div className='home_intro_title'>Certified Medical Equipment Repairs</div>
        <div className='home_intro_location'>Located in Florida and California</div>
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
    </div>

    <div className='certified_container'>
      
      <div className='certified_title'>Certified Repair Technicians</div>

      <div className='certified_mini_container'>
        <div className='certified_description'>Our repair technicians are experts in repairing medical equipment hardware and software. Our experts provide maintenance on all equipment that require regular maintenance to provide to most longevity of your equipment. Security is our priority and make sure our procedures a HIPAA safe.
        </div>
        <div className='certified_chemist_container'>
          <img src={Chemist} alt='chemist in lab' className='certified_chemist'></img>
        </div>
      </div>

      <button className='certified_button'>Get Started</button>
     
    </div>

    {/* <div className='mission_container'>
      <div className='mission_text_container'>
        <div className='mission_title'>Our Mission</div>
        <div className='mission_description'>Your equipment is secure and will receive the best repair services. We support most medical brands.</div>
      </div>

      <div className='mission_secure'>
        <i class="las la-shield-alt la-4x"></i>
        <div>Secure</div> 
      </div>

      <div className='mission_repair'>
        <i class="las la-tools la-4x"></i>
        <div>Repair</div>
      </div>

      <div className='mission_support'>
        <i class="las la-life-ring la-4x"></i>
        <div>Support</div>
      </div>
    </div> */}

    <div className='testimonial_title'>What People Are Saying</div>

    <div className='home_title_line'></div>
    
    <div className='testimonial_container'>
      <div className='testimonial_title1'>
        <div className='testimonial_description1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
        <div className='testimonial_name1'>Adeline West</div>
        <div className='testimonial_location1'>Baptist</div>
      </div>
      <div className='testimonial_title2'>
        <div className='testimonial_description2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
        <div className='testimonial_name2'>Theresa Reeves</div>
        <div className='testimonial_location2'>Miami Plastic Surgery Center</div>
      </div>
      <div className='testimonial_title3'>
        <div className='testimonial_description3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
        <div className='testimonial_name3'>Adeline West</div>
        <div className='testimonial_location3'>Baptist</div>
      </div>
      <div className='testimonial_title4'>
        <div className='testimonial_description4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
        <div className='testimonial_name4'>Theresa Reeves</div>
        <div className='testimonial_location4'>Miami Plastic Surgery Center</div>
      </div>
    </div>

    <div className='contactus'>
      <ContactUs/>
    </div>
    </>
  )
}

export default Home
