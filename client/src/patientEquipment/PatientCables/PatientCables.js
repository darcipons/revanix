import React from 'react';
import Cables from './cables.jpg'
import './PatientCables.css'

const PatientCables = () => {
  return ( 
    <div>
       <div className='rigid_header_container'>
          <div className='rigid_title'>Patient Cables</div>
        </div>

        <div className='rigid_repair_services_container'>
          <div className='rigid_repair_services_title'>Patient Cables Repair Services</div>
          <div className='rigid_repair_services_description'>Revanix Biomedical can offer more ways to save customers from that of high costs. Our services will provide not only quality repair but honest prices. </div>
        </div>

        <div className='cables_container'>
          <div className='cables_img_container'>
            <img src={Cables} alt='Patient Cables' className='cables_img' />
          </div>

          <div className='cables_description'>
            <div className='cables_title'>Our Services</div>
            <div className='cables_list'>
              <ul>
                <li>Compatibility Issues</li>
                <li>Tech Support</li>
                <li>Cross Referencing</li>
                <li>Hard to Find Cables</li>
                <li>End of Life Replacements</li>
              </ul>
            </div>
          </div>
        </div>


    </div>
   );
}
 
export default PatientCables;
