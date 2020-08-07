import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Services.css'

const services = ['Service Agreement and Contract', 'Education', 'Refurbished Equipment Sale', 'Easy Track', 'Career']

class Service extends Component {
  constructor() {
    super();
    
    this.state = {
      showDropDown: false,
    }
  }

  handleRedirect = (path) => {
    this.props.history.push(path)
    this.setState({ showDropDown: false }, () => {
      document.removeEventListener('click', this.closeDropDown);
    });
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
    return <button className='service_item' onClick={() => this.handleRedirect(list_item) }>{list_item}</button>
  }

  renderSection = (section_titles) => {
    const titles = JSON.parse(JSON.stringify(section_titles))

    return (
      <div className='service_container'>
        {titles.map((title) => this.renderListItem(title) )}
      </div>
   )
  }

  render() {
    return (
      <div>
        <button className='service_dropdown_button' onClick={this.showDropDown}>
          Services
        </button>
        
        {
          this.state.showDropDown ? (
            <div className='service_dropdown_container'
                ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              {this.renderSection(services)}
            </div>
            ) : (
              null
            )
        }
      </div>
    );
  }
}

export default withRouter(Service)
