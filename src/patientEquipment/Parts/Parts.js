import React from 'react';
import './Parts.css'

const Parts = () => {
  return ( 
    <div>
       <div className='rigid_header_container'>
          <div className='rigid_title'>Parts</div>
        </div>

        <div className='rigid_repair_services_container'>
          <div className='rigid_repair_services_title'>Parts Repair Services</div>
          <div className='rigid_repair_services_description'>Revanix Biomedical has the capability to only repair your equipment but we offer to save customers from the bundle of high costs. Revanix can provide the parts you need for your everyday use with the savings you demand. </div>
        </div>

        <div className='parts_container'>
          <ul>
            <li>Alaris 8100 and 8015</li>
            <li>NIBP - Subassembly</li>
            <li>Interior and Exterior Parts</li>
            <li>And much more</li>
          </ul>
        </div>
    </div>
   );
}
 
export default Parts;
