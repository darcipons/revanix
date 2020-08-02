import React from 'react'
import Ultrasound from  './ultrasound.jpg'
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

        <div className='ultra_middle_container'>
          <div className='ultra_img_container'>
            <img src={Ultrasound} alt='Ultrasound Machine' className='ultra_img'/>
          </div>
          <div className='ultra_brands_container'>
              <div className='ultra_title'>Brands We Repair</div>
              <div className='ultra_list'>
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

        <div className='ultra_middle_container bottom'>
          <div className='ultra_repairs_container'>
            <div className='ultra_title'>Repairs We Perform </div>
            <div className='ultra_list'>
              <ul>
                <li>Ultrasound Machines </li>
                <li>Ultrasound Probes</li>
              </ul>
            </div>
          </div>

          <div className='advan_container ultra'>
            <div className='advan_title ultra'>Revanix Advantages </div>
            <div className='advan_list ultra'>
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
  )
}

export default UltrasoundProbe
