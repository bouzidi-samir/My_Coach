
import './Header.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function Header() {

    return (
        
        <div className="container-fluid">
            <div className="row Head">
                
                <div className="title">
                    <h1>John Coaching</h1>
                    <hr></hr>
                    <h2>Ton coach sportif en ligne</h2>
                    <Link to="/Espace"> 
                        <button type="button" className="btn btn-primary">Commencer</button>
                    </Link>
                </div>



            </div>
        </div>
    );

}

export default Header;