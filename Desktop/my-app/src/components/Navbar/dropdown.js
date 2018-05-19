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
           <Navlink to='/'><span style= {stilSlova}>Prijavi se za čas</span></Navlink>
           <Navlink to='/'><span style= {stilSlova}>Otkaži čas</span></Navlink>
           <Navlink to='/'><span style= {stilSlova}>Izmeni rezervisani čas</span></Navlink>
           </div>
        </li>
        </ul>
        )}
}

export default DropDown;