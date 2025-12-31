import React from 'react';
import { Link } from 'react-router-dom';
import { domains } from '../data/domains';

const Home = () => {
    return (
        <div className="container">
            <header className="hero">
                <h1>Discover Your Passion <br /> <span style={{ color: 'var(--secondary)' }}>Build Your Future</span></h1>
                <p>
                    Stop following trends blindly. Find the domain that truly interests you,
                    learn the right skills, and build a career you love.
                </p>
                <a href="#domains" className="btn btn-primary">Explore Domains</a>
            </header>

            <section id="domains">
                <h2 className="section-title" style={{ justifyContent: 'center' }}>Popular Domains</h2>
                <div className="grid">
                    {domains.map((domain) => (
                        <Link to={`/domain/${domain.id}`} key={domain.id} className="card">
                            <h3>{domain.title}</h3>
                            <p>{domain.description}</p>
                            <div className="tag-container">
                                {domain.jobs.slice(0, 2).map((job, index) => (
                                    <span key={index} className="tag">{job}</span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
