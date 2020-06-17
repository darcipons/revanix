import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import EquipmentSale from './pages/EquipmentSale/EquipmentSale'
import Education from './pages/Education/Education'
import Contact from './pages/Contact/Contact'
import Career from './pages/Career/Career'
import Footer from './components/Footer/Footer'
import SideDrawer from './components/SideDrawer/SideDrawer'
import FlexibleEndoscope from './surgicalEquipment/FlexibleEndoscope/FlexibleEndoscope'
import RigidEndoscope from './surgicalEquipment/RigidEndoscope/RigidEndoscope'
import PowerEquip from './surgicalEquipment/PowerEquip/PowerEquip'
import VideoEquip from './surgicalEquipment/VideoEquipment/VideoEquipment'
import UltrasoundProbe from './surgicalEquipment/UltrasoundProbe/UltrasoundProbe'
import Instruments from './surgicalEquipment/Instruments/Instruments'
import Endoeye from './surgicalEquipment/Endoeye/Endoeye'
import DentalHand from './surgicalEquipment/DentalHand/DentalHand'
import PatientMont from './patientEquipment/PatientMonitoring/PatientMonitoring'
import PatientCables from './patientEquipment/PatientCables/PatientCables'
import Parts from './patientEquipment/Parts/Parts'
import InfusionPumps from './patientEquipment/InfusionPumps/InfusionPumps'
import Blenders from './patientEquipment/Blenders/Blenders'
import FiberOptic from './patientEquipment/FiberOptic/FiberOptic'
import Ekg from './patientEquipment/Ekg/Ekg'
import Footpedal from './patientEquipment/Footpedal/Footpedal'
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
          <SideDrawer show={this.state.sideDrawerOpen} />
          <Route exact path="/" component={Home} />
          <Route path='/About Us' component={About} />
          <Route path='/Equipment Sale' component={EquipmentSale} />
          <Route path='/Education' component={Education} />
          <Route path='/Contact Us' component={Contact} /> 
          <Route path='/Career' component={Career} />
          <Route path='/Flexible Endoscope' component={FlexibleEndoscope} />
          <Route path='/Rigid Endoscope' component={RigidEndoscope} />
          <Route path='/Power Equipment' component={PowerEquip} />
          <Route path='/Video Equipment' component={VideoEquip} />
          <Route path='/Ultrasound Probe' component={UltrasoundProbe} />
          <Route path='/Instruments' component={Instruments} />
          <Route path='/Endoeye' component={Endoeye} />
          <Route path='/Dental Handpieces' component={DentalHand} />
          <Route path='/Patient Monitoring' component={PatientMont}/>
          <Route path='/Patient Cables' component={PatientCables} />
          <Route path='/Parts' component={Parts} />
          <Route path='/Infusion Pumps' component={InfusionPumps} />
          <Route path='/Blenders and Regulators'  component={Blenders} />
          <Route path='/Fiber Optic Cable' component={FiberOptic}/>
          <Route path='/EKG' component={Ekg} />
          <Route path='/Footpedal' component={Footpedal} />
        </div>
        <Footer/>
      </React.Fragment>
  );
  }
}

export default App;


