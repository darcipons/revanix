import React from 'react';
import Patient2 from './monitor.jpg'
import './PatientMonitoring.css' 

const PatientMonitoring = () => {
  return ( 
    <div>
      <div className='rigid_header_container'>
        <div className='rigid_title'>Patient Monitoring</div>
      </div>

      <div className='rigid_repair_services_container'>
        <div className='rigid_repair_services_title'>Patient Monitoring Repair Services</div>
        <div className='rigid_repair_services_description'>Revanix Biomedical can provide a diagnosis and provide services on your patient monitor and monitoring systems. Our OEM trained technicians specialize in a wide variety of patient monitoring repairs and maintenance needs. We provide quality repair services for all models and makes with exceptional pricing and turnaround time. </div>
      </div>

      <div className='patient_container'>

        <div className='patient_description1'>
          <div className='patient_title'>Brands We Repair </div>
          <div className='patient_list'>
            <ul>
              <li>Philips</li>
              <li>GE</li>
              <li>CARESCAPE</li>
              <li>Spacelabs</li>
              <li>Mindray</li>
            </ul>
          </div>
        </div>

        <div className='patient_img2'>
          <img src={Patient2} alt='Patient Monitoring' className='patient_pic'/>
        </div>

        <div className='patient_description2'>
          <div className='patient_title'>Repairs We Preform</div>
          <div className='patient_list'>
            <ul>
              <li>Interior and Exterior Repairs</li>
              <li>Modules</li>
              <li>Telemtry</li>
              <li>Viral Signs</li>
              <li>Printer and Writers</li>
            </ul>
          </div>
        </div>

        <div className='patient_description3'>
          <div className='patient_title'>Services We Provide</div>
          <div className='patient_list'>
            <ul>
              <li>Free Evaluations</li>
              <li>Free Estimates</li>
              <li>Flat Rate Pricing</li>
              <li>Turnaround is Typically 5-10 Business Days Depending on Equipment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default PatientMonitoring;
