import React, { Component } from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Navlink from './components/Navbar/navlink';
import DropDown from './components/Navbar/dropdown';
import Pocetna from './components/Pocetna/pocetna';


const stilStranica = {
  width:"80%",
  margin: "auto",
  display: "block"
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />

          <div style={stilStranica}>              
               
            <Route exact path='/' component= {Pocetna}/>
      
          </div>
        </div>
    </BrowserRouter>    
    );
  }
}

export default App;
