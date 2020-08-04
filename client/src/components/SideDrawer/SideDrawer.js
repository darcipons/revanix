import React from 'react';
import { Dropdown } from 'react-bootstrap'
import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side_drawer';
  if (props.show) {
    drawerClasses = 'side_drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/About Us'>About Us</a></li>
        <li>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className='sideDrawer-btn-'>
              Surgical Repairs
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/Flexible Endoscope">Flexible Endoscope</Dropdown.Item>
              <Dropdown.Item href="/Rigid Endoscope">Rigid Endoscope</Dropdown.Item>
              <Dropdown.Item href="/Power Equipment">Power Equipment</Dropdown.Item>
              <Dropdown.Item href="/Ultrasound Probe">Ultrasound Probe</Dropdown.Item>
              <Dropdown.Item href="/Instruments">Instruments</Dropdown.Item>
              <Dropdown.Item href="/Specialty Systems">Specialty Systems</Dropdown.Item>
              <Dropdown.Item href="/Dental Handpieces">Dental Handpieces</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='sideDrawer-btn-'>
              Biomedical Repairs
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/Patient Monitoring">Patient Monitoring</Dropdown.Item>
              <Dropdown.Item href="/Patient Cables">Patient Cables</Dropdown.Item>
              <Dropdown.Item href="/Parts">Parts</Dropdown.Item>
              <Dropdown.Item href="/Infusion Pumps">Infusion Pumps</Dropdown.Item>
              <Dropdown.Item href="/Respiratory Equipment">Respiratory Equipment</Dropdown.Item>
              <Dropdown.Item href="/Fiber Optic Cable">Fiber Optic Cable</Dropdown.Item>
              <Dropdown.Item href="/EKG">EKG</Dropdown.Item>
              <Dropdown.Item href="/Footpedal">Footpedal</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='sideDrawer-btn-'>
              Services
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/Service Agreement and Contact">Service Agreement and Contact</Dropdown.Item>
              <Dropdown.Item href="/Education">Education</Dropdown.Item>
              <Dropdown.Item href="/Refurbished Equipment Sale">Refurbished Equipment Sale</Dropdown.Item>
              <Dropdown.Item href="/Easy Track">Easy Track</Dropdown.Item>
              <Dropdown.Item href="/Career">Careers</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li><a href='/Contact Us'>Contact Us</a></li>
      </ul>
    </nav>
  )
};

export default sideDrawer
