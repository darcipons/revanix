import React from 'react';
import FiberOpticCable from './fiberOptic.jpg'
import './FiberOptic.css'

const FiberOptic = () => {
  return ( 
    <div>
       <div className='rigid_header_container'>
          <div className='rigid_title'>Fiber Optic Cable</div>
        </div>

        <div className='rigid_repair_services_container'>
          <div className='rigid_repair_services_title'>Fiber Optic Cable Repair Services</div>
          <div className='rigid_repair_services_description'>Revanix Biomedical has the advanced technology to provide the type of fiber optic cables and its glass fibers ready to be shipped your way. We have the repair capabilities for refibering all fiber optic cables and head-lamps used in surgery.</div>
        </div>

        <div className='fiber_midde_container'>
          <div className='fiber_img_container'>
            <img src={FiberOpticCable} alt='Fiber Optic Cable' className='fiber_img'/>
          </div>
          
          <div className='fiber_container1'>
            <div className='fiber_title'>Brands We Repair</div>
            <div className='fiber_list'>
              <ul>
                <li>Stryker</li>
                <li>Olympus</li>
                <li>Medtronic</li>
                <li>Storz</li>
                <li>Welch Allyn</li>
                <li>and many more</li>
              </ul>
            </div>
          </div>

          <div className='fiber_container2'>
            <div className='fiber_title'>Fiber Optic Replacements</div>
            <div className='fiber_list'>
              <ul>
                <li>End Connectors</li>
                <li>Light FIber Bundle</li>
                <li>Sheathing</li>
              </ul>
            </div>
          </div>

          <div className='advan_container fiber'>
            <div className='fiber_title'>Revanix Advantages </div>
            <div className='fiber_list'>
              <ul>
                <li>Free Loaners </li>
                <li>Free Evaluations</li>
                <li>Free Estimates</li>
                <li>Quick Turnaround Times</li>
              </ul>
            </div>
          </div>

        </div>
    </div>
   );
}
 
export default FiberOptic;
