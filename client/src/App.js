import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Repairs from './pages/Repairs/Repairs'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="background"> */}
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/repairs" component={Repairs} />
        <Route path="/contact" component={Contact} />
      {/* </div> */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
