import React from 'react';
import { Link } from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import DropDown from '../NavbarDropDown/NavbarDropDown'
import Service from '../Services/Services.js'
import logo from './logo.png'
import './Navbar.css'

const Navbarr = props => {

  return (
    <div>
      <header className='toolbar'>
        <nav className='toolbar_nav'>
          <div className='toolbar_toggle_button'>
            <DrawerToggleButton click={props.drawerClickHandler}/>
          </div>
          <div className='toolbar_nav_items'>
            <ul>
              <li className='toolbar_logo'>
                <Link to='/'><img src={logo} alt='logo'></img></Link>
              </li>
              <li><Link to='/About Us'>About Us</Link></li>
              <li>
                <DropDown/>
              </li>
              <li>
                <Service/>
              </li>
              <li><Link to='/Contact Us'>Contact Us</Link></li>
            </ul>
            
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbarr 

