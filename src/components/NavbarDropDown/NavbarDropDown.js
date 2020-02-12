import React, { Component } from 'react'
import './NavbarDropDown.css'

const patient_column = ['Patient Monitoring', 'Patient Monitoring', 'Patient Cables', 'Parts', 'Infusion Pumps', 'Blenders/Regulators']
const surgical_column = ['Surgical Repairs', 'Flexible Endoscope', 'Rigid Endoscope Repair', 'Power Equipment', 'Video Equipment','On-Site Instrument Repair']

class DropDown extends Component {
  constructor() {
    super();
    
    this.state = {
      showDropDown: false,
    }

  }

  showDropDown = (event) => {
    event.preventDefault();
    
    this.setState({ showDropDown: true }, () => {
      document.addEventListener('click', this.closeDropDown);
    });
  }

  closeDropDown = (event) => {
      if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showDropDown: false }, () => {
        document.removeEventListener('click', this.closeDropDown);
      });
    }
  }
  
  renderListItem = (list_item) => {
    return <li className='list_item'>{list_item}</li>
  }

  renderListHeader = (list_header) => {
    return <li className='list_header'>{list_header}</li>
  }

  renderSection = (section_titles) => {
    const titles = JSON.parse(JSON.stringify(section_titles))
    const section_header = titles.shift()
    return (

      <div className='list_container'>
        <ul className='list_column'>
          {this.renderListHeader(section_header)}
          {titles.map((title) => this.renderListItem(title) )}
        </ul>
      </div>
   )
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
              {this.renderSection(patient_column)}
              {this.renderSection(surgical_column)}
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