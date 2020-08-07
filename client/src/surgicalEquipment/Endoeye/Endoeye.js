import React from 'react';
import Micro from './micro.jpg'
import Davinci from './davinci.jpeg'
import './Endoeye.css'

const Endoeye = () => {
  return (  
    <div>
       <div className='rigid_header_container'>
          <div className='rigid_title'>Specialty Systems</div>
        </div>

        <div className='rigid_repair_services_container'>
          <div className='rigid_repair_services_title'>Specialty Systems Repair Services</div>
          <div className='rigid_repair_services_description'> Revanix Biomedical includes a rapid response on our specialty repairs for all types of special use equipment such as phaco handpieces, diamond knives, bovie cords and divinci scopes that minimize your equipment down time with our high standard repairs and our  customer service.  </div>
        </div>

          <div className='phaco_text_container'>
            <div className='endoeye_title phaco'>Phaco Handpiece</div>
            <div className='endoeye_list phaco'>
              <ul>
                <li>Flat Rate Repair</li>
                <li>3 Month Warranty</li>
                <li>2-4 Day Turnaround</li>
                <li>Free Loaners</li>
              </ul>
            </div>
          </div>

          <div className='diamond_container'>
            <div className='diamond_text_container'>
            <div className='endoeye_title diamond'>Diamond Knives and Micro Instruments</div>
            <div className='endoeye_list diamond'>
                <ul>
                  <li>Free Evaluation</li>
                  <li>1-5 Day Turnaround</li>
                  <li>3 Month Warranty</li>
                </ul>
              </div>
            </div>

            <div className='endoeye_img_container micro'>
              <img src={Micro} alt='Micro Instruments' className='endo_img'/>
            </div>
          </div>

          <div className='davinci_container'>
            <div className='davinci_text_container'>
              <div className='endoeye_title davinci'>Davinci Endo-Wrist Reset</div>
              <div className='endoeye_list davinci'>
                <ul>
                  <li>Model S/SI</li>
                  <li>Free Evaluation</li>
                  <li>Free Estimates</li>
                  <li>Best Value</li>
                </ul>
              </div>
            </div>

            <div className='endoeye_img_container davinci'>
              <img src={Davinci} alt='Davinci Machines' className='endo_img'/>
            </div>
          </div>

     
    </div>
  );
}
 
export default Endoeye;
