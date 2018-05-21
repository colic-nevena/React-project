import React, {Component} from 'react';
import CourseList from './courses-list';
import './kursevi.stil.css'
import CourseDetails from './active-course'

class Kursevi extends Component {
    render() {
        return(            
           
            <div className="kContainer">
            <h2 id="naslov">Kursevi u Camelot dvorcu znanja</h2>
            
            <CourseList></CourseList>
            <CourseDetails></CourseDetails>
            
            </div>
            
            
        )
    }
}

export default Kursevi;