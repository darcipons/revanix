import React from 'react';
// import { Nav, NavDropdown} from 'react-bootstrap';
// import { Link } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from './logo.png'
import './Navbar.css'

const Navbar = props => {

  return (
    <>
      <header className='toolbar'>
        <nav className='toolbar_nav'>
          <div className='toolbar_toggle_button'>
            <DrawerToggleButton click={props.drawerClickHandler}/>
          </div>
          <div className='toolbar_nav_items'>
            <ul>
              <li><a href='/'>Locations</a></li>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>About Us</a></li>
              <li>
                <img src={logo} alt='logo'></img>
              </li>
              <li><a href='/'>Esquipment Repair</a></li>
              <li><a href='/'>Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar 

