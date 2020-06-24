import React from 'react'
import Office from './office-group.jpg'
import './About.css'


const About = () => {
  return (
    <div>
      <div className='about_title_container'>
        <div className='about_title'>About Us</div>
        <div className='about_description'>The World Leader in Biomedical and Surgical Repairs</div>
      </div>

      <div className='about_us_container'>
        <div className='about_us_img_container'>
          <img src={Office} alt='group of workers' className='about_us_img'></img>
        </div>

        <div className='about_us_description_container'>
          <div className='about_us_title'>Who We Are</div>
          <div className='about_us_description'>Revanix Biomedical is a privately held company with over 25 years of combined experience in the medical repair industry and provides services worldwide. As a leading international medical device repair company, Revanix Biomedical is dedicated to provide the highest quality products and services in the most cost-effective manner. The entire Revanix Biomedical team has a strong commitment to excellence.</div>
        </div>
      </div>

        <div className='our_capabilites'>
          <div className='capabilites_title'>Revanix Advantages</div>
          <div className='capabilites_line'></div>
        </div>

        <div className='capabilites_num_container'>
          <div className='capabilities_experts_container'>
            <div className='experts_num'>15</div>
            <div className='experts_title'>Repair Experts</div>
          </div>

          <div className='capabilities_experience_container'>
            <div className='experience_num'>25</div>
            <div className='experience_title'>Years of Experience</div>
          </div>

          <div className='capabilities_clients_container'>
            <div className='clients_num'>3000</div>
            <div className='clients_title'>Satisfied Clients</div>
          </div>

          <div className='capabilities_time_container'>
            <div className='text_'>Fastest Turnaround Times</div>
          </div>

          <div className='capabilities_wws_container'>
            <div className='text_ white'>Worldwide Services</div>
          </div>

          <div className='capabilities_estimates_container'>
            <div className='text_'>Free Inspections & Estimates</div>
          </div>

          <div className='capabilities_exceptional_container'>
            <div className='text_'>Exceptional Customer Service</div>
          </div>

          <div className='capabilities_shipping_container'>
            <div className='text_'>Free Shipping</div>
          </div>
        </div>


    </div>
  )
}

export default About
