import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>COLLEGE MANAGEMENT</h1>
            <nav className="nav">
                <ul>
                    
                    <li><Link to="/attendance">ATTENDANCE</Link></li>
                    <li><Link to="/">PORTAL</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
