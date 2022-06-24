import './Navbar.css';

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
                            <a className="nav_link" href="#"> 
                                Accueil 
                            </a>
                        </li>
                        <li>
                            <a className="nav_link" href="#" > 
                                Nos Services 
                            </a>
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