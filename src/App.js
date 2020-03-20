import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import SideDrawer from './components/SideDrawer/SideDrawer'
import FlexibleEndoscope from './equipment/FlexibleEndoscope/FlexibleEndoscope'
import RigidEndoscope from './equipment/RigidEndoscope/RigidEndoscope'
import PowerEquip from './equipment/PowerEquip/PowerEquip'
import UltrasoundProbe from './equipment/UltrasoundProbe/UltrasoundProbe'
import Instrument from './equipment/Instrument/Instrument'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state= {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  render() {

  return (
      <React.Fragment>
        <div style={{height: '100%'}}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
          <Route exact path="/" component={Home} />
          <Route path='/About Us' component={About}/>
          <Route path='/Contact Us' component={Contact}/> 
          <Route path="/Flexible Endoscope" component={FlexibleEndoscope} />
          <Route path='/Rigid Endoscope' component={RigidEndoscope}/>
          <Route path='/Power Equipment' component={PowerEquip}/>
          <Route path='/Ultrasound Probe' component={UltrasoundProbe}/>
          <Route path='/Instrument' component={Instrument}/>
        </div>
        <Footer/>
      </React.Fragment>
  );
  }
}

export default App;


