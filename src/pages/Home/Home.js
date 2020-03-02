import React from 'react'
import ContactUs from './../../components/ContactUs/ContactUs'
import Iso from '../../images/iso.png'
import Iso2 from '../../images/iso2.png'
import Chemist from './chemist.jpg'
import Seth2 from './steth2.jpg'
import Doctors from './doctors.jpg'
import Lab from './lab.jpg'
import Award from './award.png'
import Touch from './touch.png'
import Tv from './tv.png'
import Testimonial from './../../components/Testimonial/Testimonial'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='home_main_image'>
      <div className='home_intro_text'>
        <div className='home_intro_title'>Certified Medical Equipment Repairs</div>
        <div className='home_intro_location'>Located in California and Florida</div>
        <div className='home_intro_description'>The World Leader in Biomedical and Surgical    Repairs 
        </div>
        <div className='home_intro_iso'>
          <img src={Iso} alt='iso certificate' className='intro_iso'></img>
          <img src={Iso2} alt='iso certificate' className='intro_iso'></img>
        </div>
      </div>
    </div>

    <div className='icon_services_container'>

      <div className='icon_container'>
        <div className='serices_icon_div'>
          <img src={Touch} alt='award icon'className='services_icon'></img>
        </div>
        <div className='serices_icon_div'>
          <img src={Award} alt='award icon'className='services_icon'></img>
        </div>
        <div className='serices_icon_div'>
          <img src={Tv} alt='award icon'className='services_icon'></img>
        </div>
      </div>

      <div className='services_container'>
        <div className='services_sub_container1'>
          <div className='services_title1'>WHY CHOOSE US</div>
          <div className='services_description1'>
              <div>Worldwide superior repair services</div>
              <div>Professionally trained technicians</div>
              <div>Free loaners</div>
              <div>Free shipping</div>
              <div>Competitive pricing</div>
              <div>24/7 real-time access to repairs</div>
          </div>
        </div>

        <div className='services_sub_container2'>
          <div className='services_title2'>CERTIFICATIONS</div>
          <div className='services_description2'>
            <div className='services_description21'>Revanix Biomedical is ISO 9001:2015 and ISO 13485:2016 certified medical device repair company.</div>
            <div className='services_description22'>We are committed to your satisfaction! </div>
          </div>
        </div>

        <div className='services_sub_container3'>
            <div className='services_title3'>OUR MISSION</div>
            <div className='services_description3'>We are committed to providing superior customer service by exceeding customers expectations and serving them with unparalleled honesty, integrity and quality.</div>
        </div>
      </div>
    </div>

    <div className='certified_container'>
        <div className='certified_mini_container1'>
          <img src={Doctors} alt='doctors' className='certified_image1'></img>
          <div className='certified_sub_container1'>
            <img src={Seth2} alt='medical equipment' className='certified_image2'></img>
            <div className='certified_description'>
              <ul>
                <li>Flexible Endoscopes Repairs</li>
                <li>Rigid Scope Repairs</li>
                <li>Patient Monitoring Repairs</li>
                <li>Ultrasound Equipment Repairs</li>
                <li>Dental Handpiece Repairs</li>
                <li>Biomedical Equipment Repairs</li>
              </ul>
            </div>
            
          </div>
        </div>

        <div className='certified_mini_container2'>
          <div className='certified_sub_container2'>
            <div className='certified_small_square'>
              <img src={Iso} alt='iso certificate' className='certified_iso1'></img>
              <img src={Iso2} alt='iso certificate' className='certified_iso2'></img>
            </div>
            <img src={Chemist} alt='chemist' className='certified_image2'></img>
          </div>
          <img src={Lab} alt='lab' className='certified_image1'></img>
        </div>

    </div>

    <div className='testimonial_title'>What Our Clients Are Saying</div>
    <div className='home_title_line'></div>
    <div className='testimonial_actual'>Actual Client Testimonial</div>

    
    <Testimonial/>

    <div className='contactus'>
      <ContactUs/>
    </div>
    </>
  )
}

export default Home
