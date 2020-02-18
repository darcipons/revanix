import React from 'react';
import { Link, Route } from 'react-router-dom'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import DropDown from '../NavbarDropDown/NavbarDropDown'
import Locations from '../../components/LocationsDropDown/LocationsDropDown'
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
            <div>
            <ul>
              <li className='toolbar_logo'>
                <img src={logo} alt='logo'></img>
              </li>
            </ul>
            </div>
            <div>
              <ul>
              <li><Link to='/about'>About Us</Link></li>
              <li>
                <DropDown/>
              </li>
              <li>
                <Locations />
              </li>
              <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
            </div>
          </div>
        </nav>

        
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </header>
    </>
  )
}

export default Navbar 

