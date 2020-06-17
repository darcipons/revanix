import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './NavbarDropDown.css'

const patient_column = ['Patient Monitoring', 'Patient Monitoring', 'Patient Cables', 'Parts', 'Infusion Pumps', 'Blenders and Regulators', 'Fiber Optic Cable', 'EKG', 'Footpedal']
const surgical_column = ['Surgical Repairs', 'Flexible Endoscope', 'Rigid Endoscope', 'Power Equipment', 'Video Equipment','Ultrasound Probe','Instruments', 'Endoeye', 'Dental Handpieces']

class DropDown extends Component {
  constructor() {
    super();
    
    this.state = {
      showDropDown: false,
    }
  }

  handleRedirect = (path) => {
    this.props.history.push(path)
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
    return <button className='list_item' onClick={() => this.handleRedirect(list_item) }>{list_item}</button>
  }

  renderListHeader = (list_header) => {
    return <div className='list_header'>{list_header}</div>
  }

  renderSection = (section_titles) => {
    const titles = JSON.parse(JSON.stringify(section_titles))
    const section_header = titles.shift()
    return (

      <div className='list_container'>
        <div className='list_column'>
          {this.renderListHeader(section_header)}
          {titles.map((title) => this.renderListItem(title) )}
        </div>
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
              {this.renderSection(surgical_column)}
              {this.renderSection(patient_column)}
            </div>
            ) : (
              null
            )
        }
      </div>
    );
  }
}

export default withRouter(DropDown)
