import React, { Component } from 'react';
import Navlink from './navlink';

class DropDown extends Component {
    
    render() {
        
        var stilSlova = {
            color:'black'
        };
       
        return (
        <ul className="navbar-nav  mr-5 mt-lg-0 bg-info">  
               
         <li className="nav-item dropdown nav-item">
             <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" aria-hidden="false">             
             Zakazivanje
             </a>
           <div className="dropdown-menu">
           <Navlink to='/prijava'><span style= {stilSlova}>Prijavi se na kurs</span></Navlink>
           <Navlink to='/ispis'><span style= {stilSlova}>Otkaži članstvo</span></Navlink>          
           </div>
        </li>
        </ul>
        )}
}

export default DropDown;