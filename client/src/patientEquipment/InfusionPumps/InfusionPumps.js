import React from 'react';
import Pumps1 from './infusionPumps1.jpg'
import Pumps2 from './infusionPumps2.jpg'
import './InfusionPumps.css'

const InfusionPumps = () => {
  return ( 
    <div>
       <div className='rigid_header_container'>
          <div className='rigid_title'>Infusion Pumps</div>
        </div>

        <div className='rigid_repair_services_container'>
          <div className='rigid_repair_services_title'>Infusion Pumps Repair Services</div>
          <div className='rigid_repair_services_description'>Revanix Biomedical provides full service equipment maintenance and repair on a variety of infusion/ IV pumps. Our biomedical technician are trained with years of skilled training and and provide preventive maintenance and quality service. </div>
        </div>

        <div className='pumps_container'>
          <div className='pumps_description1'>
            <div className='pumps_title'>Brands We Repair</div>
            <div className='pumps_list'>
              <ul>
                <li>Carefusion</li>
                <li>Alaris</li>
                <li>Baxter</li>
                <li>BD</li>
                <li>CME</li>
              </ul>
            </div>
          </div>

          <div className='pumps_img_container1'>
            <img src={Pumps1} alt='Infusion Pumps' className='pumps_img' />
          </div>

          <div className='pumps_description2'>
            <div className='pumps_title'>Revanix Advantages</div>
            <div className='pumps_list'>
              <ul>
                <li>Flat Rate Prices</li>
                <li>Free Evaluations And Repair Quotes</li>
                <li>PM's</li>
                <li>Free Loaners</li>
                <li>Quick Turnaround Time</li>
              </ul>
            </div>
          </div>

          <div className='pumps_img_container2'>
            <img src={Pumps2} alt='Infusion Pumps' className='pumps_img'/>
          </div>
        </div>
    </div>
   );
}
 
export default InfusionPumps;
