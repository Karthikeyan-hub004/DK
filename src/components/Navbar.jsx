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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
