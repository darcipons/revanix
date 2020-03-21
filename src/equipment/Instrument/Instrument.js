import React from 'react'
import FedEx from '../../images/fedex.png'
import InstrumentPic from './instrument.png'
import './Instrument.css'

function Instrument () {
  return (
    <div>
      <div className='rigid_header_container'>
        <div className='rigid_title'>Instruments</div>
        <div className='rigid_repair_description'>Revanix Biomedical repair all rigid types of endoscopes and Specialty Scopes. And to the OEM specifications when needed.</div>
      </div>

      <div className='rigid_repair_services_container'>
        <div className='rigid_repair_services_title'>Instrument Services</div>
        <div className='rigid_repair_services_description'>We use only the quality replacement components. Rest Assured our team of Technical Specialists will complete a comprehensive evaluation of damage, and perform leak & shock testing and properly replace all components. In addition, for the perfect hermetic seal of all autoclavable scopes laser welded using our YAG laser welder. </div>
      </div>

      <div className='rigid_center_container'>
        <div className='rigid_center1'>
          <img src={InstrumentPic} alt='rigid endoscope' className='rigid_image'></img>
        </div>

        <div className='rigid_center_middle'>
            <div className='rigid_center_title'>1 Year Warranty </div>
            <div className='rigid_center_list'>
              <ul>
                <li>Quality Rod Lens Replacement</li>
                <li>Free Evaluations And Repair Quotes</li>
                <li>Free Overnight Shipping</li>
              </ul>
            </div>
        </div>
      </div>

      <div className='rigid_middle_container'>
        <div className='rigid_perform_container'>
          <div className='rigid_perform_title'>4-10 MM Rigid Scopes</div>
          <div className='rigid_perform_list'>
            <ul>
              <li>Flat Rate Repairs</li>
              <li>CCD Component Replacement</li>
              <li>Replace broken Rod Lenses</li>
              <li>Replace Light Bundles</li>
            </ul>
          </div>
        </div>

        <div className='rigid_services_container'>
          <div className='rigid_services_title'>Under 4mm - Specialty Rigid Endoscopes</div>
          <div className='rigid_services_list'>
            <ul>
              <li>All Optic Repairs</li>
              <li>Distal Tip</li>
              <li>Polishing</li>
              <li>Removal of Dents From Tubes</li>
              <li>Refiber Up To OEM Specifications </li>
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

export default Instrument