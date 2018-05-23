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
                <div key={teach.id} className="divKurs">  {teach.licno_ime}  
                    <hr/>             
                    <p className="txt-stil">rating: {teach.rating}</p>
                    
                    
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