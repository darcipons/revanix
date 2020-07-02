import React from 'react';
import Ekg1 from './ekg1.png'
import Ekg2 from './ekg2.png'
import './Ekg.css'

const Ekg = () => {
  return ( 
    <div>
       <div className='rigid_header_container'>
          <div className='rigid_title'>EKG and ESU</div>
        </div>

        <div className='rigid_repair_services_container'>
          <div className='rigid_repair_services_title'>EKG and ESU Repair Services</div>
          <div className='rigid_repair_services_description'>Revanix Biomedical offers full services for both ESU and EKG/ECG medical equipment maintenance and repair. Our skilled technicians provide preventive maintenance and medical service and repair with all major brands.</div>
        </div>

        <div className='ekg_container'>
          <div className='ekg_brand_container1'>
            <div className='ekg_title'>ESU Brands We Repair</div>
            <div className='ekg_list'>
              <ul>
                <li>Coviden</li>
                <li>Bovie</li>
              </ul>
            </div>
          </div>

          <div className='ekg_brand_container2'>
            <div className='ekg_title'>EKG Brands We Repair</div>
            <div className='ekg_list'>
              <ul>
                <li>GE</li>
                <li>Philips</li>
                <li>Welch Allyn</li>
              </ul>
            </div>
          </div>

          <div className='ekg_brand_container3'>
            <img src={Ekg1} alt='EKG'/>
          </div>

          <div className='ekg_brand_container4'>
            <div className='ekg_title'>Services We Provide</div>
            <div className='ekg_list'>
              <ul>
                <li>PM's</li>
                <li>Calibration</li>
                <li>Replacement Parts</li>
              </ul>
            </div>
          </div>

          <div className='ekg_brand_container5'>
            <div className='ekg_title'>Revanix Advantages</div>
            <div className='ekg_list'>
              <ul>
                <li>Free Evaluations</li>
                <li>Free Estimates</li>
                <li>Quality of Repairs Guaranteed</li>
              </ul>
            </div>
          </div>

          <div className='ekg_brand_container6'>
            <img src={Ekg2} alt='EKG'/>
          </div>
        </div>
    </div>
   );
}
 
export default Ekg;
