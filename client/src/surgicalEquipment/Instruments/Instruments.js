import React from 'react'
import InstrumentPic from './instruments.jpg'
import './Instruments.css'

function Instruments () {
  return (
    <div>
      <div className='rigid_header_container'>
        <div className='rigid_title'>Instruments</div>
      </div>

      <div className='rigid_repair_services_container'>
        <div className='rigid_repair_services_title'>Instrument Repair Services</div>
        <div className='rigid_repair_services_description'>Revanix Biomedical understands surgical instruments have a wide vary of manufacturers, many makes and models, and many parts for many purposes. Our services will demonstrate quick turnaround time and pricing that will leave the quality of repair exceptional. </div>
      </div>

      <div className='instrument_center_container'>
        <div className='instrument_img_container'>
          <img src={InstrumentPic} alt='rigid endoscope' className='instrument_img'></img>
        </div>

        <div className='instrument_middle_container'>
            <div className='instrument_title'>Instruments We Repair </div>
            <div className='instrumnet_list'>
              <ul>
                <li>General Instruments</li>
                <li>Micro Instruments</li>
                <li>Laproscopic Instruments</li>
                <li>Electro-Surgical</li>
              </ul>
            </div>
        </div>
      </div>

      
      <div className='advan_container instrument'>
        <div className='advan_title instrument'>Revanix Advantages </div>
        <div className='advan_list instrument'>
          <ul>
            <li>Free Loaners</li>
            <li>Free Evaluations</li>
            <li>Free Estimates</li>
            <li>Quick Turnaround Time</li>
          </ul>
        </div>
      </div>
  </div>
  )
}

export default Instruments
