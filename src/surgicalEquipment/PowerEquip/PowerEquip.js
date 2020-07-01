import React from 'react'
import Power from './power-equip.png'
import './PowerEquip.css'

function PowerEquip () {
  return (
    <div>
      <div className='rigid_header_container'>
        <div className='rigid_title'>Power Equipment</div>
        {/* <div className='rigid_repair_description'>Revanix Biomedical repair all rigid types of endoscopes and Specialty Scopes. And to the OEM specifications when needed.</div> */}
      </div>

      <div className='rigid_repair_services_container'>
        <div className='rigid_repair_services_title'>Power Equipment Services</div>
        <div className='rigid_repair_services_description'> Revanix Biomedical has the capability to repair all types of surgical drills, saws, console shavers, ESU’s  and more. Our in-house repair derives from collaboration from the highly supportive technical team and customers for exceptional repairs with quick turnaround time </div>
      </div>

      <div className='power_center_container'>
          <img src={Power} alt='rigid endoscope' className='power_img'></img>
      </div>

      <div className='rigid_middle_container'>
        <div className='rigid_perform_container'>
          <div className='rigid_perform_title'>Brands We Repair</div>
          <div className='rigid_perform_list'>
            <ul>
              <li>Stryker</li>
              <li>Conmed</li>
              <li>Medtronic</li>
              <li>Valleuy Lab</li>
              <li>And many more</li>
            </ul>
          </div>
        </div>

        <div className='rigid_services_container'>
        <div className='rigid_perform_title'>Revanix Advantages</div>
          <div className='rigid_services_list'>
            <ul>
              <li>Free Evaluations</li>
              <li>Free Estimates</li>
              <li>90-Day Warranty</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
  )
}

export default PowerEquip
