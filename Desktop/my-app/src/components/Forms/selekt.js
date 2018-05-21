import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showCourses } from '../../store/actions/index';

class SelectCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses:null
        }
       
    }

    render() {
        
        let courses = this.props.prikazi();
        
        return  (
            <div className="selekt-div">
                <select className='form-control col-sm-5' ref='_select'>
                    <option value="null" disabled selected>Kursevi</option>
                    
                    {this.props.courses.map((course, index) => {
                    return <option key={index} value ={course.ime}>
                    {course.ime}
                    </option>
                    })}
                    
                </select>        
            </div>
            )}
}


function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({  
    prikazi: showCourses 
    },dispatch)
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SelectCourse);