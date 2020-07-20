import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side_drawer';
  if (props.show) {
    drawerClasses = 'side_drawer open';
  }

  return (
  <nav className={drawerClasses}>
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/About Us'>About Us</a></li>
      <li><a href='/'>Equipment Repair</a></li>
      <li><a href='/'>Services</a></li>
      <li><a href='/Contact Us'>Contact Us</a></li>
    </ul>
  </nav>
  )
};

export default sideDrawer
