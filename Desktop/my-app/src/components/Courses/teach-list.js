import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showCourses, showTeachers } from "../../store/actions";
import './kursevi.stil.css';


class TeachList extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            teachers: null
        }
    }   
 
      
    render() {
        return (                 
             this.renderTeachers()
        )       
    }
    
    
    renderTeachers() {
        
        if(!this.props.teachers) {         
            return <div>Škola trenutno ne radi.</div>
        }
        
       
        return this.props.teachers.map(teach => {
            return (               
               
                <div key={teach.id} className="divKursSc">  {teach.licno_ime}  
                    
                    <p className="txt-stil2">rating: {teach.rating}</p>
                    <p className="txt-stil"> {teach.kursevi + " "}</p>
                    
                </div>
              
            )
        })
    }
}
    


function mapStateToProps(state) {
        return {
            teachers: state.teachers
        }
    }    
    

    
export default connect(mapStateToProps)(TeachList)