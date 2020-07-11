import React from 'react';
import Foot from './foot.png'
import './Footpedal.css'

const Footpedal = () => {
  return ( 
    <div>
       <div className='rigid_header_container'>
          <div className='rigid_title'>Footpedal</div>
        </div>

        <div className='rigid_repair_services_container'>
          <div className='rigid_repair_services_title'>Footpedal Repair Services</div>
          <div className='rigid_repair_services_description'>Revanix Biomedical offers quality services on all types of foot pedals with a quick turnaround time. Our highly skilled technician will diagnose and repair a variety of foot switches for a flat rate price, our expertise will determine the quality of repair for your needs. </div>
        </div>

        <div className='foot_container'>
        <div className='foot_brand_container1'>
            <div className='foot_title'>Brands We Repair</div>
            <div className='foot_list'>
              <ul>
                <li>Stryker</li>
                <li>Valley Lab</li>
                <li>Dyonics</li>
                <li>and Many More</li>
              </ul>
            </div>
          </div>

          <div className='foot_brand_container2'>
            <div className='foot_title'>Revanix Advantages</div>
            <div className='foot_list'>
              <ul>
                <li>Free Evaluations</li>
                <li>Free Estimates</li>
                <li>Free Loaners</li>
                <li>Quick Turnaround Time</li>
                <li>Flat Rate Price: $495</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='foot_img_container'>
          <img src={Foot} alt='Foot Pedal' className='foot_img'/>
        </div>
    </div>
   );
}
 
export default Footpedal;
