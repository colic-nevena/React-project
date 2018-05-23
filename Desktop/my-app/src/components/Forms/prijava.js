import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showCourses, dodajStudenta } from '../../store/actions';
import './prijava.stil.css';

class FormPrijava extends Component {
    
    constructor(props) {
        super(props); 
        
        this.state ={
            mejl: "no mail",
            ime: "no name",
            prezime: "no surname",
            kurs: null            
        }    
        
        this.add = this.add.bind(this);
    }
    
    
    handleChangeMail(event) {
        console.log("U event za mejl sam: "+ event.target.value)
        this.setState({mejl: event.target.value});        
      }
      
      
      handleChangeName(event) {
        console.log("U event za ime sam: "+ event.target.value)
        this.setState({ime: event.target.value});
        
      }
      
      handleChangeSurname(event) {
        console.log("U event za prezime sam: "+ event.target.value)
        this.setState({prezime: event.target.value});        
      }
      
      
      handleChangeCourse(event) {
        console.log("U event za kurs sam: "+ event.target.value)
        this.setState({kurs: event.target.value});        
      }
      
      
    
    render() {
        let courses = this.props.prikazi();        
        
        return (
            <form>
            <div className="container4">
             <h2 className = "stilNaslov">Prijavi se na kurs</h2>
            </div>
   
            <div className="container1">
             <label><b>Ime</b></label>
             <input type="text"  onChange={this.handleChangeName.bind(this)} placeholder="Unesite Vaše ime" name="uname"  ref='_imeTxt' required/>

            <label><b>Prezime</b></label>
            <input type="text"  onChange={this.handleChangeSurname.bind(this)} placeholder="Unesite Vaše prezime" name="usurname"  ref='_prezTxt' required/>
    
            <label><strong>Email adresa</strong></label>
            <input type="text"  onChange={this.handleChangeMail.bind(this)} placeholder="Unesite Vašu email adresu" name="email"   ref='_mejlTxt'required/>  
    
            <label className="desno"><strong>Kurs:</strong></label>
           
            <select className='form-control col-sm-5' ref='_select' onChange={this.handleChangeCourse.bind(this)}>
                    <option value="null" disabled selected>Kursevi</option>
                    
                    {this.props.courses.map((course, index) => {
                    return <option key={index} value ={course.ime}>
                    {course.ime}
                    </option>
                    })}
                    
            </select>  
            <hr/>
            
            <button type="button" className="btn btn-primary prijavibtn" onClick={()=>{this.add()}}>Upiši me</button>
    
           </div>
        </form>
    )}

    
    
    add() {
        this.props.dodaj(this.state.mejl,this.state.ime,this.state.prezime,this.state.kurs);
        this.ocisti();
    }
    
    
    ocisti() {
        this.refs._imeTxt.value = "";
        this.refs._prezTxt.value = "";
        this.refs._mejlTxt.value = "";
    }
    
    
}


function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
    dodaj: dodajStudenta,
    prikazi: showCourses  
    }, dispatch)
};
  

export default connect(mapStateToProps, mapDispatchToProps)(FormPrijava)