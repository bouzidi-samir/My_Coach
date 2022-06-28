import { Link } from 'react-router-dom';
import './Header.css';


function Header() {

    return (
        
        <div className="container-fluid">
            <div className="row Head">
                
                <div className="title">
                    <h1>John Coaching</h1>
                    <h2>Ton coach sportif en ligne</h2>
                    <Link to="/Mon Espace}">
                        <button type="button" className="btn btn-warning">Commencer</button>
                    </Link>
                </div>



            </div>
        </div>
    );

}

export default Header;