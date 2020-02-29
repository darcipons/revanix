import React from 'react';
import { Link } from 'react-router-dom'
// import Contact from '../../pages/Contact/Contact'
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
              <li><Link to='/'>Equipment Sale/Purchase</Link></li>
              <li><Link to='/'>Education</Link></li>
              <li><Link to='/'>Career</Link></li>
              <li><Link to='/'>Contact Us</Link></li>
            </ul>
            
          </div>
        </nav>

       
        
        {/* <Route path='/contact' component={Contact}/>  */}
      </header>
    </>
  )
}

export default Navbar 

