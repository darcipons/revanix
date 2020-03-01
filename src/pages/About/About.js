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
          <div className='about_us_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis nunc sed augue lacus viverra. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Felis eget nunc lobortis mattis aliquam.</div>
        </div>
      </div>

        <div className='our_capabilites'>
          <div className='capabilites_title'>Our Capabilities</div>
          <div className='capabilites_line'></div>
        </div>

        <div className='capabilites_num_container'>
          <div className='capabilities_experts_container'>
            <div className='experts_num'>12</div>
            <div className='experts_title'>Repair Experts</div>
          </div>

          <div className='capabilities_experience_container'>
            <div className='experience_num'>20</div>
            <div className='experience_title'>Years of Experience</div>
          </div>

          <div className='capabilities_clients_container'>
            <div className='clients_num'>3000</div>
            <div className='clients_title'>Satisfied Clients</div>
          </div>
        </div>


    </div>
  )
}

export default About
