import React, {Component} from 'react';
import CourseList from './courses-list';
import CourseDetails from './active-course'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectByDay } from '../../store/actions';
import './kursevi.stil.css'


class Kursevi extends Component {
    
    constructor(props) {
        super(props);
       
    }
    
    render() {
        
        const days = [
            { naziv: "ponedeljak"},
            { naziv: "utorak" },
            { naziv: "sreda" },
            { naziv: "četvrtak"},
            { naziv: "petak"},
            { naziv: "subota"}
        ]
        
        return(            
           
            <div className="donjiDeo">
            <h2 id="naslov">Kursevi u Camelot dvorcu znanja</h2>
            
            <div className="kContainer">
            <CourseList></CourseList>
            </div>
           
            <select className='form-control col-sm-2 sel' ref='_select' onChange={this.handleChange.bind(this)}>
                    <option value="null" disabled selected>Izaberi dan</option>
                    
                    {days.map((day, index) => {
                    return <option key={index} value = {day.naziv}>{day.naziv}</option>
                    })}
                    
            </select> 
            
            <CourseDetails></CourseDetails>          
                  
            
            </div>   
            
        )
    }
    
    handleChange(event) {
      
        console.log(`selektovan dan se salje: ${this.refs._select.value}`);
        this.props.selektuj(this.refs._select.value);  
             
      }
      
      
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
    selektuj: selectByDay,    
    }, dispatch)
};
  

export default connect(null, mapDispatchToProps)(Kursevi)