import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`navbar navbar-dark bg-dark `+styles.navNavbar}>
            <div className="container">
                <Link to='/' className="navbar-brand text-uppercase">Superhéroes DC</Link>
            </div>
        </nav>
    );
}


export default Navbar;