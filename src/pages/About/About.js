import React from 'react'
import Office from './office-group.jpg'
import Bullet from './bullet.png'
import Customer from './customerService.png'
import Time from './clock.png'
import Estimates from './estimates.png'
import Animista, {AnimistaTypes} from "react-animista";
import './About.css'


const About = () => {
  return (
    <div>
      <div className='top_title_container'>
        <div className='top_title'>About Us</div>
        <div className='top_description'>The World Leader in Biomedical and Surgical Repairs</div>
      </div>

      <div className='about_us_container'>
        <div className='about_us_img_container'>
          <img src={Office} alt='group of workers' className='about_us_img'></img>
        </div>

        <div className='about_us_description_container'>
          <div className='about_us_title'>Who We Are</div>
          <div className='about_us_description'>Revanix Biomedical is a privately held company with over 25 years of combined experience in the medical repair industry and provides services worldwide. As a leading international medical device repair company, Revanix Biomedical is dedicated to provide the highest quality products and services in the most cost-effective manner. The entire Revanix Biomedical team has a strong commitment to excellence.</div>

          <div className='about_us_commitment'>
            <div className='about_commitment_title'>Our commitment to you: </div>
            <div className='about_commitment'>
              <img src={Bullet} alt='bullet point' className='bullet_point'/>
              <strong>Honesty </strong>- Always telling the truth during the service and repair process, never mislead. Always make recommendations by order of priority of customers so they can plan for future service needs.
            </div>
            <div className='about_commitment'>
              <img src={Bullet} alt='bullet point' className='bullet_point'/>
              <strong>Integrity</strong> - Always doing the right thing, even when no one is watching. We build trust in our relationships through honest and ethical behavior.
            </div>
            <div className='about_commitment'>
              <img src={Bullet} alt='bullet point' className='bullet_point'/>
              <strong>Quality and Excellence</strong> - Set and achieve the highest standards in everything we do by using the best possible equipment, parts and personnel.
            </div>
            <div className='about_commitment'>
              <img src={Bullet} alt='bullet point' className='bullet_point'/>
              <strong>Team Work</strong> - We work together with you to make a difference.
            </div>
          </div>
        </div>
      </div>

      

        <div className='our_capabilites'>
        <Animista type={AnimistaTypes.SCALE_UP_HOR_CENTER} delay='0.3s'>
          <div className='capabilites_title'>Revanix Advantages</div>
        </Animista>
          <div className='capabilites_line'></div>
        </div>

        <div className='capabilites_num_container'>
          <div className='capabilities_experts_container cc'>
            <div className='experts_num'>15</div>
            <div className='experts_title text_'>Repair Experts</div>
          </div>

          <div className='capabilities_experience_container cc'>
            <div className='experience_num'>25</div>
            <div className='experience_title text_'>Years of Experience</div>
          </div>

          <div className='capabilities_clients_container cc'>
            <div className='clients_num'>2</div>
            <div className='clients_title text_' >Locations</div>
          </div>

          <div className='capabilities_time_container cc' >
            <div className='text_'>Fastest Turnaround Times</div>
            <div className='capabilities_icon'><img src={Time} alt='Estimates Icon' className='iconn_'/></div>

          </div>

          <div className='capabilities_wws_container cc'>
            <div className='text_ white'>Worldwide Services</div>
            <div className='capabilities_icon'><i class="las la-globe-americas la-9x cc_icon" ></i></div>
          </div>

          <div className='capabilities_estimates_container cc'>
            <div className='text_'>Free Inspections & Estimates</div>
            <div className='capabilities_icon'><img src={Estimates} alt='Estimates Icon' className='iconn_'/></div>
          </div>

          <div className='capabilities_exceptional_container cc'>
            <div className='text_'>Exceptional Customer Service</div>
            <div className='capabilities_icon'><img src={Customer} alt='Estimates Icon' className='iconn_2'/></div>
          </div>

          <div className='capabilities_shipping_container cc'>
            <div className='text_'>Free Shipping</div>
            <div className='capabilities_icon ship'><i class="las la-shipping-fast la-9x cc_icon"></i> </div>
          </div>
        </div>


    </div>
  )
}

export default About
