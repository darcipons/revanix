import React from 'react'
import Flex1 from './flexible-endoscope.png'
import Flex2 from './flexible-endoscope-2.png'
import FedEx from './fedex.png'
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

      <div className='flex_brand_container'>
        <div className='flex_brand_flex1'>
          <img src={Flex1} alt='flexible endoscope' className='flex_image1'></img>
        </div>

        <div className='flex_brand_middle'>
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

        <div className='flex_brand_flex2'>
          <img src={Flex2} alt='flexible endoscope' className='flex_image2'></img>
        </div>

      </div>

      <div className='flex_middle_container'>
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

        <div className='flex_services_container'>
          <div className='flex_services_title'>The Services We Offer Includes</div>
          <div className='flex_services_list'>
            <ul>
              <li>1-3 Day Turn Around Time</li>
              <li>Free Overnight Shipping</li>
              <li>Risk-Free Evaluation & Repair Estimates</li>
              <li>Free Preventive Maintenance</li>
              <li>Most Comprehensive Workmanship Warranties In The Industry </li>
              <li>2 Year Warranty on Insertion Tube Replacements</li>
              <li>6 Months Warranties on All Other Repairs</li>
              <li>In-Service Training</li>
              <li>CE Credits</li>
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

export default FlexibleEndoscope 
