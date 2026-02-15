import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="logo">
                    DomainDetector
                </Link>
                <div>
                    <Link to="/linkedin-guide" className="btn btn-outline" style={{ marginRight: '1rem', borderColor: '#0077b5', color: '#0077b5' }}>
                        LinkedIn Guide
                    </Link>
                    <Link to="/github-guide" className="btn btn-outline" style={{ marginRight: '1rem', borderColor: '#333', color: 'var(--text-color)' }}>
                        GitHub Guide
                    </Link>
                    <a
                        href="https://codingfantasy.com/games/mcp"
                        className="btn btn-outline"
                        style={{ marginRight: '1rem', borderColor: '#1b7f5a', color: '#1b7f5a' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Coding Fantasy
                    </a>
                    <a
                        href="https://cssgridgarden.com/"
                        className="btn btn-outline"
                        style={{ marginRight: '1rem', borderColor: '#4b8b3b', color: '#4b8b3b' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        CSS Grid Garden
                    </a>
                    <a
                        href="https://www.codingame.com/start/"
                        className="btn btn-outline"
                        style={{ marginRight: '1rem', borderColor: '#1e3a8a', color: '#1e3a8a' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        CodinGame
                    </a>
                    <a
                        href="https://play.elevatorsaga.com/"
                        className="btn btn-outline"
                        style={{ borderColor: '#8b5a2b', color: '#8b5a2b' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Elevator Saga
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
