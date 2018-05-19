import React, {Component} from 'react';
import './pocetna.stil.css'

class Pocetna extends Component {

    render() {
        return (
     <div>
           
           <article>
            <h1><span className="naslov">O školi</span></h1>
            
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Donec fermentum est nunc, eu feugiat mi dapibus
                vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            </p>
            <img className="skolaPic" src="pic2.jpg" alt="skola_slika" width="65%" height="330px" />
            <div className = "ispodSlike">
                <span className="rvreme"><strong>Radno vreme:</strong> svakim radnim danom i subotom od 8h do 18h<br/>
                <strong>Adresa:</strong> Đerdapska 61, Niš</span>
            </div>
        </article>
            
    </div>
        )}    
    
}

export default Pocetna;