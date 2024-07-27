import React from 'react';
import { Link } from 'react-router-dom';
import sakuraLogo from '../assets/sakuralogo.svg';

const Navbar = () => {
    return (
        <header className="navbar">
            <img src={sakuraLogo} alt="Sakura Studios Logo" className="logo"/>
            <nav>
                <Link to="/">Home</Link>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="#faq" className="faq">FAQ</a>
            </nav>
        </header>
    );
}

export default Navbar;
