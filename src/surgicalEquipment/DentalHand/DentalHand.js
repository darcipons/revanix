import React from 'react';
import Dental1 from './dental.png'
import Dental2 from './dental2.png'
import './DentalHand.css'

const DentalHand = () => {
  return ( 
  <div>
      <div className='rigid_header_container'>
          <div className='rigid_title'>Dental Handpieces</div>
      </div>

      <div className='rigid_repair_services_container'>
        <div className='rigid_repair_services_title'>Dental Handpieces Services</div>
        <div className='rigid_repair_services_description'>Revanix Biomedical's wide selection of dental handpiece repairs are designed to meet all your dental practice needs. </div>
      </div>

      <div className='dental_img_container'>
        <img src={Dental1} alt='Dental Handpiece' className='dental_img first'/>
        <img src={Dental2} alt='Dental Handpiece' className='dental_img second'/>
      </div>

      <div className='dental_middle_container'>
        <div className='dental1_container'>
          <div className='dental_title'>Repair Capabilities with All Dental Handpieces</div>
          <div className='dental_list'>
              <ul>
                <li>Kavo</li>
                <li>Brassler</li>
                <li>Midwest</li>
                <li>Henry Schein, etc.</li>
              </ul>
            </div>
        </div>

        <div className='dental2_container'>
          <div className='dental_title'>Revanix Advantages</div>
          <div className='dental_list'>
              <ul>
                <li>Quote Within 1 Day</li>
                <li>1-2 Day Turnaround</li>
                <li>6 Month Warranty</li>
                <li>1 Year Warranty on Replaced Turbines</li>
              </ul>
            </div>
        </div>

        <div className='dental3_container'>
          <div className='dental_title'>More Repair Capabilities</div>
          <div className='dental_list'>
              <ul>
                <li>Cavitrons</li>
                <li>Strilizers</li>
                <li>Ultrasonic</li>
                <li>Scalers</li>
                <li>Lab Motors</li>
              </ul>
            </div>
        </div>
        
      </div>
  </div> 
  );
}
 
export default DentalHand;
