import React, {Component} from 'react';
import TeachList from './teach-list';
import './kursevi.stil.css'
import { showCourses, showTeachers, showBestTeachers } from '../../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Nastavnici extends Component {
    render() {
        return(            
           
            <div className="nContainer">
            <h2 id="naslov">Nastavnici u Camelot dvorcu znanja</h2>
            
            <div className="nast">
            <TeachList></TeachList>
            </div>
            
            <button className="btn btn-secondary btnNajbolji" onClick={()=>this.props.prikaziNajNastavnike()}>Prikaži najbolje</button>
            
            </div>
            
            
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({         
    prikaziNajNastavnike: showBestTeachers
    },dispatch)
  }


  export default connect(null,mapDispatchToProps)(Nastavnici);