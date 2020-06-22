import React from 'react';
import { Navbar, Nav, NavDropdown, Dropdown, DropdownButton, ButtonGroup }from 'react-bootstrap/'
// import { Link } from 'react-router-dom'
// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import DropDown from '../NavbarDropDown/NavbarDropDown'
// import Locations from '../../components/LocationsDropDown/LocationsDropDown'
import logo from './logo.png'
import './Navbar.css'

const Navbarr = props => {

  return (
    <div>
      {/* <header className='toolbar'>
        <nav className='toolbar_nav'>
          <div className='toolbar_toggle_button'>
            <DrawerToggleButton click={props.drawerClickHandler}/>
          </div>
          <div className='toolbar_nav_items'>
           
            <div className='toolbar_logo'>
              <Link to='/'><img src={logo} alt='logo'></img></Link>
            </div>

            <ul>
              <li><Link to='/About Us'>About Us</Link></li>
              <li>
                <Locations />
              </li>
              <li>
                <DropDown/>
              </li>
              <li><Link to='/Equipment Sale'>Equipment Sale/Purchase</Link></li>
              <li><Link to='/Education'>Education</Link></li>
              <li><Link to='/Career'>Career</Link></li>
              <li><Link to='/Contact Us'>Contact Us</Link></li>
            </ul>
            
          </div>
        </nav>
      </header> */}

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt='reavanix logo' width='270' height='120' className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/About Us">About Us</Nav.Link>
            <Nav.Link href="/Equipment Sale">Equipment Sale/Purchase</Nav.Link>
            <Nav.Link href="/Education">Education</Nav.Link>
            <Nav.Link href="/Career">Career</Nav.Link>
            <Nav.Link href="/Contact Us">Contact Us</Nav.Link>
            <Nav.Link>
              <Dropdown />
            </Nav.Link>
            <NavDropdown title="Equipment Repairs" id="basic-nav-dropdown">
              <DropdownButton key="right" id="dropdown-button-drop-right" drop="right" title="Surgical Repairs" as={ButtonGroup} variant="light">
                <Dropdown.Item href="/Flexible Endoscope">Flexible Endoscope</Dropdown.Item>
                <Dropdown.Item href="/Rigid Endoscope">Rigid Endoscope</Dropdown.Item>
                <Dropdown.Item href="/Power Equipment">Power Equipment</Dropdown.Item>
                <Dropdown.Item href="/Video Equipment">Video Equipment</Dropdown.Item>
                <Dropdown.Item href="/Ultrasound Probe">Ultrasound Probe</Dropdown.Item>
              </DropdownButton>

              <DropdownButton key="right" id="dropdown-button-drop-right" drop="right" title="Patient Repairs" as={ButtonGroup} variant="light">
                <Dropdown.Item href="/Patient Monitoring">Patient Monitoring</Dropdown.Item>
                <Dropdown.Item href="/Patient Cables">Patient Cables</Dropdown.Item>
                <Dropdown.Item href="/Parts">Parts</Dropdown.Item>
                <Dropdown.Item href="/Infusion Pumps">Infusion Pumps</Dropdown.Item>
                <Dropdown.Item href="/Blenders and Regulators">Blenders and Regulators</Dropdown.Item>
              </DropdownButton>
{/*            
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default Navbarr 

