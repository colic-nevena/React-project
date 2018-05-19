import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navlink from './navlink';
import DropDown from './dropdown';

class Navbar extends Component {
 
    render() {
        return (
          <nav className = "navbar navbar-expand-lg navbar-dark bg-secondary">
          <img src="castle.png" width="45px" height="50px" alt="castle image"/>
          <Navlink to='/'><span className='navbar-brand'>Camelot</span></Navlink>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
          <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item"><Navlink to='/'>Početna</Navlink></li>             
             
              <li className="nav-item"><Navlink to='/'>Kursevi</Navlink></li>                    
            </ul>
            
            
            <form className="form-inline my-2 my-lg-0">
                    
            <DropDown />              
              
            </form>
            
          </div>
        </nav>
          

        
     

        );
    }
}


export default Navbar;