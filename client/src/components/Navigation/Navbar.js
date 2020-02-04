import React from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from './logo.png'
import './Navbar.css'

const Navbar = () => {

  return (

    <div>
      <Nav className="justify-content-center" id='nav-bar' activeKey="/home" sticky='top'>
        <div className="nav_item">
          <Nav.Item>
            <Link className="text" to={'/'}>Home</Link>
          </Nav.Item>
        </div>
        <div className="nav_item">
          <Nav.Item>
            <Link className="text" to={'/about'}>About Us</Link>
          </Nav.Item>
        </div>
        <div className='navbar_logo'>
          <img src={logo} alt='revanix logo' ></img>
        </div>
        <div className="nav_item" id='nav_dropdown'>
          <NavDropdown title="Equipment Repairs" id="nav-dropdown" className="text">
            <div className='dropdown_left'>
            <NavDropdown.Item eventKey="4.1" className='dropdown_header'>Surgical</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.2">Flexible Endoscope</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Rigid Endoscope Repair</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Power Equipment</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Video Equipment</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">On-Site Instrument Repair</NavDropdown.Item>
            </div>

            <div className='dropdown_right'>
            <NavDropdown.Item eventKey="4.1" className='dropdown_header'>Patient Monitoring</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.2">Patient Monitoring</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Patient Cables</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Parts</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Infusion Pumps</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Blenders/Regulators</NavDropdown.Item>
            </div>
          </NavDropdown>
        </div>
        <div className="nav_item">
          <Nav.Item>
            <Link className="text" to={'/contact'}>Contact Us</Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>

  )
}

export default Navbar 

