import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='home_main_image'>
      <div className='home_intro_text'>
        <div className='home_intro_title'>Certified Medical Equipment Repairs</div>
        <div className='home_intro_location'>Located in Florida and California</div>
        <div className='home_intro_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
    <div>
      <div className='home_title'>What We Do</div>
    </div>
    <div className='services_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare arcu. Dictum varius duis at consectetur lorem donec. Ac tortor vitae purus faucibus. Volutpat est velit egestas dui id ornare arcu. Dictum varius duis at consectetur lorem donec. Ac tortor vitae purus faucibus.
    </div>
    <div className='services_container'>
      <div className='services_icon1'>
        <i class="las la-shipping-fast la-5x"></i>
      </div>
      <div className='services_title1'>Ship Your Equipment</div>
      <div className='services_description1'>Ship your equipment to the closest one of our office locations. Once we receive your shipment we will contact you to inform you we received your equipment.</div>
      <div className='services_icon2'>
        <i class="las la-tools la-5x"></i>
      </div>
      <div className='services_title2'>Equipment Repair</div>
      <div className='services_description2'>Our Expert Medical Repair technicians will evaluate your equipment sent as well as analyze it. It will then get repaired and it will then get ready for shipment.</div>
      <div className='services_icon3'>
       <i class="las la-shipping-fast la-5x"></i>
      </div>
      <div className='services_title3'>Receive Your Equipment</div>
      <div className='services_description3'>Once your equipment is repaired, we will then ship our your equipment. You will receive your equipment as quick as possible for as little as to possible down time.</div>
    </div>

    <div className='certified_container'>
      <div className='certified_title'>Certified Repair Technicians</div>
      <div className='certified_description'>Our repair technicians are experts in repairing medical equipment hardware and software. Our experts provide maintenance on all equipment that require regular maintenance to provide to most longevity of your equipment. Security is our priority and make sure our procedures a HIPAA safe.</div>
      <button className='certified_button'>Get Started</button>
    </div>
    </>
  )
}

export default Home
