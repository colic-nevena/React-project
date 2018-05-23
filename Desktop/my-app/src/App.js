import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Navlink from './components/Navbar/navlink';
import DropDown from './components/Navbar/dropdown';
import Pocetna from './components/Pocetna/pocetna';
import CourseList from './components/Courses/courses-list';
import Kursevi from './components/Courses/kursevi';
import Nastavnici from './components/Courses/nastavnici';
import FormPrijava from './components/Forms/prijava';
import FormIspis from './components/Forms/ispis';


class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
        <Navbar />

          <div className="stilStranica">   
            <Route path='/nastavnici' component= {Nastavnici}/>           
            <Route path='/ispis' component= {FormIspis}/>
            <Route path='/prijava' component= {FormPrijava}/>
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
