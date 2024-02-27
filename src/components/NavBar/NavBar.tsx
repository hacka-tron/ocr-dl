import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li><NavLink to='/' className='nav-item'>View Licenses</NavLink></li>
                <li><NavLink to='/add' className='nav-item'>Add License</NavLink></li>

            </ul>
        </nav>
    )
}

export default NavBar;