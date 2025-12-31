import React from 'react';
import { Link } from 'react-router-dom';

const LinkedInGuide = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div className="detail-header">
                <Link to="/" className="btn btn-outline" style={{ marginBottom: '1rem' }}>← Back to Home</Link>
                <h1>LinkedIn: Your Professional Passport</h1>
                <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                    Master the art of professional networking and unlock new career opportunities.
                </p>
            </div>

            <div className="detail-grid">
                {/* Getting Started */}
                <div className="info-box">
                    <h3 className="section-title">1. Creating Your Account</h3>
                    <p>Getting started is simple. Go to <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>linkedin.com</a> and sign up.</p>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem' }}>
                        <li style={{ marginBottom: '10px' }}>✅ <strong>Use a professional email:</strong> Avoid nicknames.</li>
                        <li style={{ marginBottom: '10px' }}>✅ <strong>Location:</strong> Set your accurate location to find local opportunities.</li>
                        <li style={{ marginBottom: '10px' }}>✅ <strong>Account Type:</strong> The free Basic account is sufficient for beginners.</li>
                    </ul>
                </div>

                {/* Profile Optimization */}
                <div className="info-box">
                    <h3 className="section-title">2. Optimizing Your Profile</h3>
                    <p>Your profile is your digital landing page. Make it count.</p>

                    <div style={{ marginTop: '1.5rem' }}>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>📸 Headshot & Banner</h4>
                        <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>Upload a clear, professional photo (smile!). Use the banner to highlight your field or interests.</p>

                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>📝 Headline</h4>
                        <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>More than just a job title. Example: <em>"Computer Science Student | Aspiring Web Developer | React Enthusiast"</em></p>

                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>📖 About Section</h4>
                        <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>Tell your story. What drives you? What are you learning? Keep it engaging in 2,000 characters or less.</p>

                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>🛠 Skills & Endorsements</h4>
                        <p style={{ fontSize: '0.95rem' }}>Add relevant skills (e.g., Python, Communication). Ask peers to endorse you.</p>
                    </div>
                </div>

                {/* Networking Strategies */}
                <div className="info-box">
                    <h3 className="section-title">3. Networking Strategies</h3>
                    <ul className="roadmap-list">
                        <li><strong>Connect:</strong> Start with friends, family, and classmates.</li>
                        <li><strong>Personalize:</strong> Always send a note with connection requests (e.g., "Hi [Name], I enjoyed your post about...").</li>
                        <li><strong>Engage:</strong> Like and comment on posts. Share your own learning journey.</li>
                        <li><strong>Join Groups:</strong> Find communities in your niche (e.g., "React Developers").</li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="info-box">
                    <h3 className="section-title">Useful Resources</h3>
                    <div className="tag-container">
                        <a href="https://www.linkedin.com/help/linkedin/answer/a1338274" target="_blank" rel="noopener noreferrer" className="tag" style={{ background: '#0077b5', color: 'white', textDecoration: 'none' }}>
                            Official Guide
                        </a>
                        <a href="https://www.youtube.com/results?search_query=linkedin+profile+tips+for+students" target="_blank" rel="noopener noreferrer" className="tag" style={{ background: '#FF0000', color: 'white', textDecoration: 'none' }}>
                            YouTube Tutorials
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkedInGuide;
