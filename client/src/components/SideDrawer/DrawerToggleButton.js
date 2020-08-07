import React from 'react';
import Logo from '../../images/logo.png'
import './DrawerToggleButton.css'

const drawerToggleButton = props => (
  <>
    <button className='toggle_button' onClick={props.click}>
      <div className='toggle_button_line'></div>
      <div className='toggle_button_line'></div>
      <div className='toggle_button_line'></div>
    </button>

    <img src={Logo} alt='Revanix Logo' className='mobile_logo'/>
  </>
);

export default drawerToggleButton
