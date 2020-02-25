import React from 'react'
import './FlexibleEndoscope.css'

function FlexibleEndoscope () {
  return (
    <div>
      <div className='flex_header_container'>
        <div className='flex_title'>Flexible Endoscope Repairs</div>
        <div className='flex_repair_description'>Revanix Biomedical provides the unparalleled repair services for all types of Flexible Endoscopes.</div>
      </div>

      <div className='flex_repair_services_container'>
        <div className='flex_repair_services_title'>Flexible Endoscopes Repair Services</div>
        <div className='flex_repair_services_description'>Our expert technicians are professionally trained and have an average of 15+ years of experience in the industry, utilizing a multi-functional inspection process, advanced repair technology, certified parts & components and the highest level of attention to both major and minor repairs on all types of flexible endoscopes. </div>
      </div>

      <div className='flex_middle_container'>
        <div className='flex_brand_container'>
          <div className='flex_brand_title'>Brands We Repair </div>
          <div className='flex_brand_list'>
            <ul>
              <li>Olympus</li>
              <li>Pentax</li>
              <li>Karl Storz</li>
              <li>ACMI</li>
            </ul>
          </div>
        </div>

       
        <div className='flex_middle_line'>
        </div>

        <div className='flex_perform_container'>
          <div className='flex_perform_title'>Repairs We Perform </div>
          <div className='flex_perform_list'>
            <ul>
              <li>CCD Repairs</li>
              <li>CCD Component Replacement</li>
              <li>Angulation Rebuilds</li>
              <li>Insertion Tubes</li>
              <li>Biopsy Channels</li>
              <li>Bending Rubbers</li>
              <li>Suction Channels</li>
              <li>Video Buttons</li>
              <li>Light Guide Bundles</li>
              <li>Light Guide Tubes</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FlexibleEndoscope 
