import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectCourse, showCourses} from "../../store/actions";


class CourseList extends Component {
   
    
    render() {
        return (
           
            <ul>                                
                { this.renderCourses() }
            </ul>
        
        )
        
    }
    
    
    renderCourses() {
        
        if(!this.props.courses) {
            console.log("uso u no props");
            return <li>Škola trenutno ne radi.</li>
        }
        
       
        return this.props.courses.map(course => {
            return (
                <li key= {course.id}>{course.ime}
                <span onClick= {()=> {
                    console.log("usao u map props");
                    this.props.selektuj(course)}}> {course.naziv}</span>
                
                </li>
            )
        })
    }
}
    
function mapStateToProps(state) {
        return {
            courses: state.courses
        }
    }
    
   function mapDispatchToProps(dispatch) {
        return bindActionCreators ({
        selektuj: selectCourse,    
        prikazi: showCourses        
        },dispatch)
    }
      
    
export default connect(mapStateToProps,mapDispatchToProps)(CourseList)