import React from 'react'
import FedEx from '../../images/fedex.png'
import './UltrasoundProbe.css'

function UltrasoundProbe () {
  return (
    <div>
        <div className='rigid_header_container'>
          <div className='rigid_title'>Ultrasound Repairs</div>
          <div className='rigid_repair_description'>Revanix Biomedical will provide a cost-effective means of servicing and repairing your ultrasound systems without the risk of downtime or lost revenue. </div>
        </div>

        <div className='rigid_repair_services_container'>
          <div className='rigid_repair_services_title'>Ultrasound Repair Services </div>
          <div className='rigid_repair_services_description'>Revanix Biomedical has developed in-house repair and maintenance departments on both coasts to support our network of sales specialists located throughout the United States and ensure fast turnaround time to all your repair needs. </div>
        </div>

        <div className='rigid_center_container'>
          <div className='rigid_center1'>
            {/* <img src={Power} alt='rigid endoscope' className='rigid_image'></img> */}
          </div>

          <div className='rigid_center_middle'>
              <div className='rigid_center_title'>Brands We Repair</div>
              <div className='rigid_center_list'>
                <ul>
                  <li>GE</li>
                  <li>Phillips</li>
                  <li>Toshiba</li>
                  <li>BK</li>
                  <li>SonoSite</li>
                </ul>
              </div>
          </div>
        </div>

        <div className='rigid_middle_container'>
          <div className='rigid_perform_container'>
            <div className='rigid_perform_title'>Repairs We Perform </div>
            <div className='rigid_perform_list'>
              <ul>
                <li>Ultrasound Machines </li>
                <li>Ultrasound Probes</li>
              </ul>
            </div>
          </div>

        </div>

        <div className='fedex_container'>
          <div className='fedex_title'>Steps to Take When Your Equipment Needs Repair</div>
          <div>
            <img src={FedEx} alt='fedex logo' className='fedex_logo'></img>
          </div>
          <div className='fedex_description'>To get started you must print out a shipping label. You will send the equipment to our closest location.</div>
        </div>

    </div>
  )
}

export default UltrasoundProbe
