import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showCourses, selectCourse} from "../../store/actions";
import './kursevi.stil.css';


class CourseList extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            courses: null
        }
    }   
 
      
    render() {
        return (                 
             this.renderCourses()
        )       
    }
    
    
    renderCourses() {
        
        if(!this.props.courses) {         
            return <div>Škola trenutno ne radi.</div>
        }
        
       
        return this.props.courses.map(course => {
            return (               
                <div key={course.id}  onClick={()=>this.props.selektuj(course.id)} className={(course.science === true) ? "divKursSc" : "divKursLang"}>{course.ime}
                   
                    <p className="txt-stil">rating: {course.rating}</p>                    
                    <p className="txt-stil">slobodnih mesta: {course.mesta_na_kursu}</p>
                </div>
              
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
        selektuj: selectCourse
    },dispatch)
}
    
export default connect(mapStateToProps,mapDispatchToProps)(CourseList)