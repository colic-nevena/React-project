import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCourse} from "../../store/actions";
import './kursevi.stil.css';


class CourseDetails extends Component {
    
    render() {
        
        if(!this.props.course) {
            return <div className="info">Kliknite na kurs za više informacija</div>
        }      
        
        
        return (
            
            <div className="selKurs">
                <h3>{this.props.course.ime}</h3>
                <p><span className="txt-stil3">rating:</span> <span className="txt-stil">{this.props.course.rating}</span></p>
                <p><span className="txt-stil3">Dani kojima se održava:</span><br/> 
                <span className="txt-stil">{this.props.course.dani + " "}</span></p>
                <p><span className="txt-stil3">Termini:</span>  <span className="txt-stil">{this.props.course.sati + "h "}</span></p>
                
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        course: state.activeCourse
    }
}

export default connect(mapStateToProps)(CourseDetails)