import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            {/* <h1 className="navbar-logo">YourLogo</h1> */}
            <Link to="/" className="navbar-logo">
                <img src="https://w1.pngwing.com/pngs/358/505/png-transparent-house-symbol-logo-natural-environment-guest-house-text-line-area-sign.png" alt="Logo" className="logo-image" />
            </Link>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/rooms" className="home">
                    <li>Rooms</li>
                </Link>
                <Link to="/gallery" className="home">
                    <li>Gallery</li>
                </Link>
                <Link to="/about" className="about">
                    <li>About</li>
                </Link>
                <Link to="/services" className="services">
                    <li>Services</li>
                </Link>
                <Link to="/testimonial" className="services">
                    <li>testimonial</li>
                </Link>
                <Link to="/contact" className="contact">
                    <li>Contact</li>
                </Link>
                <li className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    );
};

export default Navbar;