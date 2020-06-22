import React from 'react';
import { Link } from 'react-router-dom'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import DropDown from '../NavbarDropDown/NavbarDropDown'
import Locations from '../../components/LocationsDropDown/LocationsDropDown'
import logo from './logo.png'
import './Navbar.css'

const Navbar = props => {

  return (
    <div>
      <header className='toolbar'>
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
      </header>
    </div>
  )
}

export default Navbar 

