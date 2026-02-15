import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showGamesDropdown, setShowGamesDropdown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const codingGames = [
        { name: 'Coding Fantasy', url: 'https://codingfantasy.com/games/mcp' },
        { name: 'CSS Grid Garden', url: 'https://cssgridgarden.com/' },
        { name: 'CodinGame', url: 'https://www.codingame.com/start/' },
        { name: 'Elevator Saga', url: 'https://play.elevatorsaga.com/' }
    ];

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setShowGamesDropdown(false);
    };

    const toggleGamesDropdown = () => {
        setShowGamesDropdown(!showGamesDropdown);
    };

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="logo">
                    DomainDetector
                </Link>
                
                {/* Hamburger Icon */}
                <button 
                    className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Overlay Backdrop */}
                <div 
                    className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                ></div>

                {/* Navigation Links */}
                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/tutorial" className="btn btn-outline" style={{ borderColor: '#f59e0b', color: '#f59e0b' }} onClick={closeMobileMenu}>
                        Tutorial
                    </Link>
                    <Link to="/linkedin-guide" className="btn btn-outline" style={{ borderColor: '#0077b5', color: '#0077b5' }} onClick={closeMobileMenu}>
                        LinkedIn Guide
                    </Link>
                    <Link to="/github-guide" className="btn btn-outline" style={{ borderColor: '#333', color: 'var(--text-color)' }} onClick={closeMobileMenu}>
                        GitHub Guide
                    </Link>
                    <div 
                        className="dropdown"
                        onMouseEnter={() => window.innerWidth > 768 && setShowGamesDropdown(true)}
                        onMouseLeave={() => window.innerWidth > 768 && setShowGamesDropdown(false)}
                    >
                        <button 
                            className="btn btn-outline" 
                            style={{ borderColor: '#10b981', color: '#10b981' }}
                            onClick={toggleGamesDropdown}
                        >
                            Coding Games ▾
                        </button>
                        {showGamesDropdown && (
                            <div className="dropdown-menu">
                                {codingGames.map((game, index) => (
                                    <a
                                        key={index}
                                        href={game.url}
                                        className="dropdown-item"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={closeMobileMenu}
                                    >
                                        {game.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
