import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showCourses } from '../../store/actions';
import './prijava.stil.css';

class FormPrijava extends Component {
    
    constructor(props) {
        super(props);        
    }
    
    render() {
        return (
            <form>
            <div className="container4">
             <h2 className = "stilNaslov">Prijavi se na kurs</h2>
            </div>
   
            <div className="container1">
             <label><b>Ime</b></label>
             <input type="text" placeholder="Unesite Vaše ime" name="uname" required/>

            <label><b>Prezime</b></label>
            <input type="password" placeholder="Unesite Vaše prezime" name="usurname" required/>
    
            <label><b>Email adresa</b></label>
            <input type="password" placeholder="Unesite Vašu email adresu" name="email" required/>
    
    

            <button type="button" class="btn btn-primary prijavibtn">Upiši me</button>
    
           </div>


        </form>
    )}

}

export default FormPrijava;