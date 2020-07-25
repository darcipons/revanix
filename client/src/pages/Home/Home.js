import React from 'react'
import ContactUs from './../../components/ContactUs/ContactUs'
import Purple from './purplePic.jpg'
import Award from './award.png'
import Touch from './touch.png'
import Tv from './tv.png'
import Testimonial from './../../components/Testimonial/Testimonial'
import Header from './../../components/Header/Header'
import { Spring } from 'react-spring/renderprops'
import './Home.css'

const Home = () => {

  function animation(title) {
    return <Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    config={{ delay: 1000, duration: 1000 }}
    >
    {props => ( <div style={props} className='services_title'>{title}</div> )}
    </Spring>
  }

  return (
    <>
      <div className='home_main_image'>
        <Header />
      </div>

      <div className='icon_services_container'>

        <div className='icon_container'>
          <div className='serices_icon_div'>
            <img src={Touch} alt='touch icon'className='services_icon'></img>
          </div>
          <div className='serices_icon_div'>
            <img src={Award} alt='award icon'className='services_icon'></img>
          </div>
          <div className='serices_icon_div'>
            <img src={Tv} alt='tv icon'className='services_icon'></img>
          </div>
        </div>

        <div className='services_container'>
          <div className='services_sub_container1'>
            {animation('WHY CHOOSE US')}
            <div className='services_description'>
                <ul>
                  <li>Worldwide superior repair services</li>
                  <li>Professionally trained technicians</li>
                  <li>Free loaners</li>
                  <li>Free shipping</li>
                  <li>Competitive pricing</li>
                  <li>24/7 real-time access to repairs</li>
                </ul>
            </div>
          </div>

          <div className='services_sub_container2'>
            {animation('CERTIFICATIONS')}
            <div className='services_description'>
              <div className='services_description21'>Revanix Biomedical is ISO 9001:2015 and ISO 13485:2016 certified medical device repair company.</div>
              <div className='services_description21'>We are committed to your satisfaction! </div>
            </div>
          </div>

          <div className='services_sub_container2'>
            {animation('OUR MISSION')}
            <div className='services_description'>We are committed to providing superior customer service by exceeding customers expectations and serving them with unparalleled honesty, integrity, and quality.</div>
          </div>
        </div>
      </div>


      <div className='home_about_us'>
        <div className='home_about_pic'>
          <img src={Purple} alt='lab' className='description_pic'/>
        </div>

        <div className='home_about_container'>
          <div className='home_about_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <h3 className='signature_title'>Revanix Signature Repairs</h3>
          <div className='signature_list'>
            <ul>
              <li>Flexible Endoscope</li>
              <li>Rigid Endoscope</li>
              <li>Patient Monitors</li>
              <li>Fiber Optic Cable</li>
            </ul>
          </div>
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
