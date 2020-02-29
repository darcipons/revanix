import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import SideDrawer from './components/SideDrawer/SideDrawer'
import FlexibleEndoscope from './equipment/FlexibleEndoscope/FlexibleEndoscope'
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
          <Route path="/Flexible Endoscope" component={FlexibleEndoscope} />
        </div>
        <Footer/>
      </React.Fragment>
  );
  }
}

export default App;


