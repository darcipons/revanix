import React from 'react';
import { Link, Route } from 'react-router-dom'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import DropDown from '../NavbarDropDown/NavbarDropDown'
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
              <li><Link to='/locations'>Locations</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li>
                <img src={logo} alt='logo'></img>
              </li>
              <li>
                <DropDown/>
              </li>
              <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
          </div>
        </nav>

        
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </header>
    </>
  )
}

export default Navbar 

