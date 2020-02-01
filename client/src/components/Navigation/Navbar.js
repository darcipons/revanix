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
        <div className="nav_item">
          <NavDropdown title='Equipment Repairs' className='text'>
            <NavDropdown.Item eventKey='1'>Surgical Repairs</NavDropdown.Item>
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

