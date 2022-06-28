import './Navbar.css';
import Header from '../Header/Header';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light ">    
                    <a href="#" class="navbar-brand">
                    </a>
                <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav ms-auto text-center"> 
                        <li>
                            <Link className="nav_link" to="/"> 
                                Accueil 
                            </Link>
                        </li>
                        <li>
                            <Link className="nav_link" to="/Espace"> 
                                Mon Espace 
                            </Link>
                        </li>
                        <li>
                            <a className="nav_link" href="#"> 
                                Réservation 
                            </a>
                        </li>
                        <li>
                            <a className="nav_link" href="#"> 
                                Contact 
                            </a>
                        </li>
                    </ul>
                   
                
                </div>
                 
                </nav>
            </div>
        </div>
    );
}

export default Navbar;