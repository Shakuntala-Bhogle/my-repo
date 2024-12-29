import {Link} from 'react-router-dom';
import { useState } from 'react';
function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return(
    <nav className={`container ${menuOpen ? "open" : ""}`}>
        <a href='/'>
         <img src={require('../images/Logo.jpg')} alt="Header-Logo" />
         </a>
         <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
         </div>
    <ul className={`navigation ${menuOpen ? "visible" : ""}`}>
        <li><Link className='hover-effect' to="/" >Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#menu">Menu</a></li>
        <li><Link to="/reservations">Reservation</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
</nav>
    )
}

export default Nav;

