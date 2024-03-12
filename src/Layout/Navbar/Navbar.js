/*
*	Navbar.js	
*
*	Ersteller:		    Kevin Krazius
*	Erstellungsdatum:	03-03-2024
*	Info/Notizen:		Implementierung einer Navbar-Komponente
*
*	Editiert von:		<Name>
*	Editiert am:		<Datum>
*	Info/Notizen:		<Beschreibung der Änderung>
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/main.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-section">
                <Link className="logo" to="/">IU-Quiz-App</Link>
            </div>
            <ul className="navLeft">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Sign up</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
