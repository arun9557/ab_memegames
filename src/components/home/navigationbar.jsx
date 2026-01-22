import React, { useState } from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="custom-navbar">
            <a href="#" className="nav-logo">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
                    <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
                    <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
                    <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
                </svg>
            </a>

            <div className="nav-desktop-menu">
                <a href="#products" className="nav-link-group">
                    <span className="nav-link-text">Products</span>
                    <span className="nav-link-text-hover">Products</span>
                </a>
                <a href="#stories" className="nav-link-group">
                    <span className="nav-link-text">Stories</span>
                    <span className="nav-link-text-hover">Stories</span>
                </a>
                <a href="#pricing" className="nav-link-group">
                    <span className="nav-link-text">Pricing</span>
                    <span className="nav-link-text-hover">Pricing</span>
                </a>
                <a href="#docs" className="nav-link-group">
                    <span className="nav-link-text">Docs</span>
                    <span className="nav-link-text-hover">Docs</span>
                </a>
            </div>

            <div className="nav-actions">
                <a className="btn-contact" href="https://arunshekhar.me/">
                    Contact
                </a>
                <a className="btn-get-started" href="https://meme-games.vercel.app/">
                    Get Started
                </a>
            </div>

            <button id="menuToggle" className="mobile-menu-btn" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div id="mobileMenu" className={`mobile-menu ${isMenuOpen ? 'flex' : 'hidden'}`}>
                <a className="mobile-link" href="#products">Products</a>
                <a className="mobile-link" href="#stories">Customer Stories</a>
                <a className="mobile-link" href="#pricing">Pricing</a>
                <a className="mobile-link" href="#docs">Docs</a>
                <a className="btn-contact mobile-btn" href="https://arunshekhar.me/">Contact</a>
                <a className="btn-get-started mobile-btn" href="https://meme-games.vercel.app/">Get Started</a>
            </div>
        </nav>
    );
};

export default NavigationBar;