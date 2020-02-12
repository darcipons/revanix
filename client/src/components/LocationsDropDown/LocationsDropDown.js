import React, {Component} from 'react';
import './LocationsDropDown.css'

const locations = ['Florida', 'California']

class Location extends Component {
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

  renderSection = (section_titles) => {
    const titles = JSON.parse(JSON.stringify(section_titles))
    return (
      <div className='list_container'>
        <ul className='list_column'>
          {titles.map((title) => this.renderListItem(title) )}
        </ul>
      </div>
   )
  }

  render() {
    return (
      <div>
        <button className='dropdown_button' onClick={this.showDropDown}>
          Locations
        </button>
        
        {
          this.state.showDropDown ? (
            <div className='dropdown_container'
                ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              {this.renderSection(locations)}
            </div>
            ) : (
              null
            )
        }
      </div>
    );
  }
}

export default Location
