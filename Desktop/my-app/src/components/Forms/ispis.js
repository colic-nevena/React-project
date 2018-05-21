import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showCourses, brisiStudenta } from '../../store/actions';
import './prijava.stil.css';

class FormIspis extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            mejl: "nema mejl"
        }
      
    }   
 
    handleChange(event) {
        console.log("U event sam: "+ event.target.value)
        this.setState({mejl: event.target.value});
        
      }
      
      
    render() {
        return (
            <form>
            <div className="container4">
             <h2 className = "stilNaslov">Otkaži članstvo</h2>
            </div>
   
            <div className="container1">
             <label><strong>Ime</strong></label>
             <input type="text" placeholder="Unesite Vaše ime" name="uname" ref='_imeTxt' required/>

            <label><strong>Prezime</strong></label>
            <input type="text" placeholder="Unesite Vaše prezime" name="usurname" ref='_prezTxt' required/>
    
            <label><strong>Email adresa</strong></label>
            <input type="text"   onChange={this.handleChange.bind(this)} placeholder="Unesite Vašu email adresu" name="email" ref='_mejlTxt'  required/>  
    

            <button type="button" className="btn btn-danger prijavibtn" onClick={()=>this.props.brisi(this.state.mejl)}>Ispiši me</button>
    
           </div>


        </form>
    )}

}
 

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
    brisi: brisiStudenta    
    }, dispatch)
}
  

export default connect(null, mapDispatchToProps)(FormIspis)