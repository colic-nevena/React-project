import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectCourse} from "../../store/actions";

class CourseDetails extends Component {
    
    render() {
        if(!this.props.course){
            return <div>Klik na kurs za više informacija</div>
        }
        
        return (
            <div>
                <h3>{this.props.course.naziv}</h3>
                <div>{this.props.course.rating}</div>
                <div>{this.props.course.mesta_na_kursu}</div>
            </div>
        )
       
    }
 
}

function MapStateToProps(state) {
    return {
        course: state.activeCourse
    }
}

export default connect(MapStateToProps)(CourseDetails)