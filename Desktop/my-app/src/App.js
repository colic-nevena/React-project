import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Navlink from './components/Navbar/navlink';
import DropDown from './components/Navbar/dropdown';
import Pocetna from './components/Pocetna/pocetna';
import CourseList from './components/Courses/courses-list';
import Kursevi from './components/Courses/kursevi';



const stilStranica = {
  width:"80%",
  margin: "auto",
  display: "block"
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
        <Navbar />

          <div style={stilStranica}>              
               
            <Route path='/kursevi' component= {Kursevi}/>
            <Route exact path='/' component= {Pocetna}/>
      
          </div>
        </div>
    </BrowserRouter>  
  
    
    
    </div>
    );
  }
}

export default App;
