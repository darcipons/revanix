import React, { Component } from 'react'
import './NavbarDropDown.css'

class DropDown extends Component {
  constructor() {
    super();
    
    this.state = {
      showDropDown: false,
    }

    this.showDropDown = this.showDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
  }

  showDropDown(event) {
    event.preventDefault();
    
    this.setState({ showDropDown: true }, () => {
      document.addEventListener('click', this.closeDropDown);
    });
  }

  closeDropDown(event) {
      if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showDropDown: false }, () => {
        document.removeEventListener('click', this.closeDropDown);
      });
    }
  }
  

  render() {
    return (
      <div>
        <button className='dropdown_button' onClick={this.showDropDown}>
          Equipment Repair
        </button>
        
        {
          this.state.showDropDown ? (
        <div className='dropdown_container'
          ref={(element) => {
          this.dropdownMenu = element;
        }}
        >
          <div className='patient_container'>
            <ul className='patient_list'>
              <li>Patient Monitoring</li>
              <li>Patient Monitoring</li>
              <li>Patient Cables</li>
              <li>Parts</li>
              <li>Infusion Pumps</li>
              <li>Blenders/Regulators</li>
            </ul>
          </div>

          <div className='surgical_container'>
            <ul className='surgical_list'>
              <li>Surgical Repairs</li>
              <li>Flexible Endoscope</li>
              <li>Rigid Endoscope Repair</li>
              <li>Power Equipment</li>
              <li>Video Equipment</li>
              <li>On-Site Instrument Repair</li>
            </ul>
          </div>
        </div>
          ) : (
            null
          )
        }
      </div>
    );
  }
}

export default DropDown
