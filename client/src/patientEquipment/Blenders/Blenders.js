import React from 'react';
import Vacuum3 from './blenders.jpg'
import Ventilator from './ventilators.jpg'
import './Blenders.css'

const Blenders = () => {
  return ( 
    <div>
        <div className='rigid_header_container'>
          <div className='rigid_title'>Respiratory Equipment</div>
        </div>

        <div className='rigid_repair_services_container'>
          <div className='rigid_repair_services_title'>Respiratory Equipment Repair Services</div>
          <div className='rigid_repair_services_description'>Revanix Biomedical offers complete respiratory services on oxygen blenders, regulators, and ventilators. Our skilled technicians will complete overhauls for all OEMs, calibrations, and parts replacement. </div>
        </div>

        <div className='oxygen_title'>Oxygen Blenders</div>
        <div className='oxygen_container'>
          <div className='oxygen_sub_container1'>
            <ul>
              <li>$295 Small Block Flat Rate Price</li>
              <li>$345 Large Block Flat Rate Price</li>
            </ul>
          </div>
          <div className='oxygen_sub_container2'>
            <ul>
              <li>1-2 Day Turnaround Time</li>
              <li>2 Year Warranty</li>
              <li>Free Loaners</li>
            </ul>
          </div>
        </div>

        <div className='oxygen_title'>Vacuum Regulators</div>
        <div className='oxygen_container'>
          <div className='oxygen_sub_container1'>
            <ul>
              <li>$95 Flat Rate Price</li>
            </ul>
          </div>
          <div className='oxygen_sub_container2'>
            <ul>
              <li>1-2 Day Turnaround Time</li>
              <li>1 Year Warranty</li>
              <li>Free Loaners</li>
            </ul>
          </div>
        </div>

        <div className='vacuum_img_container'>
          <img src={Vacuum3} alt='Vacuum Regulators' className='vacuum_img'/>
        </div>
    
        <div className='oxygen_title vent'>Ventilators</div>
        <div className='ventilator_container'>
          <div className='ventilator_img_container'>
            <img src={Ventilator} alt='Ventilator' className='ventilator_img'/>
          </div>
          <div className='ventilator_sub_container first'>
            <ul>
              <li>Free Estimates and Evaluations</li>
              <li> Preventative Maintenance and Medical Repairs</li>
            </ul>
          </div>
          <div className='ventilator_sub_container second'>
            <div className='ventilator_title'>Brands We Repair</div>
            <ul>
              <li>GE</li>
              <li>Philips</li>
              <li>Drager</li>
              <li>Impact</li>
              <li>Zoll</li>
              <li>and Many More</li>
            </ul>
          </div>
        </div>

    </div>
   );
}
 
export default Blenders;
