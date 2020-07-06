import React from 'react'
import ContactUs from './../../components/ContactUs/ContactUs'
import Iso from '../../images/iso.png'
import Iso2 from '../../images/iso2.png'
// import Logo from '../../images/logo.png'
// import Chemist from './chemist.jpg'
// import Seth2 from './steth2.jpg'
// import Doctors from './doctors.jpg'
// import Lab from './lab.jpg'
import Circles from './circles.png'
// import Long from './long.jpg'
import Award from './award.png'
import Touch from './touch.png'
import Tv from './tv.png'
import Testimonial from './../../components/Testimonial/Testimonial'
import Header from './../../components/Header/Header'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='home_main_image'>
      <Header />
      {/* <div className='home_intro_text'>
        <div className='home_intro_title'>Certified Medical Equipment Repairs</div>
        <div className='home_intro_location'>Located in California and Florida</div>
        <div className='home_intro_description'>The World Leader in Biomedical and Surgical    Repairs 
        </div>
        <div className='home_intro_iso'>
          <img src={Iso} alt='iso certificate' className='intro_iso'></img>
          <img src={Iso2} alt='iso certificate' className='intro_iso'></img>
        </div>
      </div> */}
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
          <div className='services_title'>WHY CHOOSE US</div>
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
          <div className='services_title'>CERTIFICATIONS</div>
          <div className='services_description'>
            <div className='services_description21'>Revanix Biomedical is ISO 9001:2015 and ISO 13485:2016 certified medical device repair company.</div>
            <div className='services_description21'>We are committed to your satisfaction! </div>
          </div>
        </div>

        <div className='services_sub_container2'>
            <div className='services_title'>OUR MISSION</div>
            <div className='services_description'>We are committed to providing superior customer service by exceeding customers expectations and serving them with unparalleled honesty, integrity, and quality.</div>
        </div>
      </div>
    </div>


    <div className='home_about_us'>
      <div className='home_about_pic'>
        <img src={Circles} alt='lab' className='description_pic'/>
      </div>

      <div className='home_about_description'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
