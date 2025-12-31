import React from 'react';
import { Link } from 'react-router-dom';

const GitHubGuide = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div className="detail-header">
                <Link to="/" className="btn btn-outline" style={{ marginBottom: '1rem' }}>← Back to Home</Link>
                <h1>GitHub: The Home of Code</h1>
                <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                    Learn how to create an account, manage repositories, and build your developer portfolio.
                </p>
            </div>

            <div className="detail-grid">
                {/* Getting Started */}
                <div className="info-box">
                    <h3 className="section-title">1. Creating Your Account</h3>
                    <p>Go to <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>github.com</a> to sign up.</p>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem' }}>
                        <li style={{ marginBottom: '10px' }}>✅ <strong>Username:</strong> Choose a professional name (e.g., jane-doe-dev).</li>
                        <li style={{ marginBottom: '10px' }}>✅ <strong>Plan:</strong> Start with the "Free" plan.</li>
                        <li style={{ marginBottom: '10px' }}>✅ <strong>Verification:</strong> Verify your email address to unlock all features.</li>
                    </ul>
                </div>

                {/* Repositories */}
                <div className="info-box">
                    <h3 className="section-title">2. Repositories (Repos)</h3>
                    <p>A repository is like a folder for your project.</p>

                    <div style={{ marginTop: '1.5rem' }}>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>➕ Creating a Repo</h4>
                        <ol style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                            <li>Click the "New" button in the dashboard.</li>
                            <li>Name your repository (e.g., "my-first-website").</li>
                            <li>Set visibility to "Public" (for portfolio) or "Private".</li>
                            <li>Check "Add a README file".</li>
                        </ol>

                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>📄 What is a README?</h4>
                        <p style={{ fontSize: '0.95rem' }}>A <code>README.md</code> file explains what your project is, how to install it, and how to use it.</p>
                    </div>
                </div>

                {/* Profile Optimization */}
                <div className="info-box">
                    <h3 className="section-title">3. Optimizing Your Profile</h3>
                    <ul className="roadmap-list">
                        <li><strong>Profile README:</strong> Create a repo named your username (e.g., <code>karthik/karthik</code>) to add a special bio to your profile page.</li>
                        <li><strong>Pin Repos:</strong> Pin your best 4-6 projects to your profile so visitors see them first.</li>
                        <li><strong>Green Squares:</strong> Commit code regularly to keep your contribution graph green!</li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="info-box">
                    <h3 className="section-title">Useful Resources</h3>
                    <div className="tag-container">
                        <a href="https://docs.github.com/en/get-started" target="_blank" rel="noopener noreferrer" className="tag" style={{ background: '#333', color: 'white', textDecoration: 'none' }}>
                            GitHub Docs
                        </a>
                        <a href="https://lab.github.com/" target="_blank" rel="noopener noreferrer" className="tag" style={{ background: '#24292e', color: 'white', textDecoration: 'none' }}>
                            GitHub Skills
                        </a>
                        <a href="https://www.youtube.com/github" target="_blank" rel="noopener noreferrer" className="tag" style={{ background: '#FF0000', color: 'white', textDecoration: 'none' }}>
                            GitHub YouTube
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubGuide;
