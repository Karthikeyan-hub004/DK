import React from 'react';
import { Link } from 'react-router-dom';

const Tutorial = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div className="detail-header">
                <Link to="/" className="btn btn-outline" style={{ marginBottom: '1rem' }}>← Back to Home</Link>
                <h1>Website Tutorial</h1>
                <p className="lead" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                    Welcome to DomainDetector! This guide will help you get the most out of our platform
                    and discover the perfect career path for you.
                </p>
            </div>

            <div className="detail-grid">
                {/* Getting Started */}
                <div className="info-box">
                    <h3 className="section-title">🎯 Getting Started</h3>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>What is DomainDetector?</h4>
                    <p>
                        DomainDetector is your comprehensive guide to exploring different career domains
                        in technology. We help you discover various fields, understand required skills,
                        and find the right path for your career journey.
                    </p>
                </div>

                {/* Exploring Domains */}
                <div className="info-box">
                    <h3 className="section-title">🔍 Exploring Domains</h3>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>Step 1: Browse Available Domains</h4>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem' }}>
                        <li style={{ marginBottom: '10px' }}>✅ On the homepage, scroll down to see all available domains</li>
                        <li style={{ marginBottom: '10px' }}>✅ Each card shows a domain title, brief description, and sample job roles</li>
                        <li style={{ marginBottom: '10px' }}>✅ Domains include Web Development, AI/ML, Cloud Computing, and more</li>
                    </ul>

                    <h4 style={{ marginBottom: '0.5rem', marginTop: '1.5rem', color: 'var(--secondary)' }}>Step 2: Select a Domain</h4>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem' }}>
                        <li style={{ marginBottom: '10px' }}>✅ Click on any domain card to view detailed information</li>
                        <li style={{ marginBottom: '10px' }}>✅ You'll see comprehensive details about that specific field</li>
                    </ul>
                </div>

                {/* Understanding Domain Details */}
                <div className="info-box">
                    <h3 className="section-title">📚 Understanding Domain Details</h3>
                    <p style={{ marginBottom: '1rem' }}>Each domain page provides:</p>
                    <ul className="roadmap-list">
                        <li><strong>Description:</strong> Overview of the domain and what it involves</li>
                        <li><strong>Required Skills:</strong> Technical and soft skills you need to develop</li>
                        <li><strong>Career Paths:</strong> Various job roles available in this domain</li>
                        <li><strong>Salary Ranges:</strong> Expected compensation for different roles</li>
                        <li><strong>Learning Resources:</strong> Curated links to courses, tutorials, and documentation</li>
                        <li><strong>Real-World Projects:</strong> Practical project ideas to build your portfolio</li>
                    </ul>
                </div>

                {/* Using the AI Chatbot */}
                <div className="info-box">
                    <h3 className="section-title">🤖 Using the AI Chatbot</h3>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>How to Use the Chatbot</h4>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem' }}>
                        <li style={{ marginBottom: '10px' }}>✅ Look for the chatbot icon in the bottom-right corner of any page</li>
                        <li style={{ marginBottom: '10px' }}>✅ Click to open the chat interface</li>
                        <li style={{ marginBottom: '10px' }}>✅ Ask questions about domains, career paths, skills, or learning resources</li>
                        <li style={{ marginBottom: '10px' }}>✅ Get instant, AI-powered responses tailored to your queries</li>
                    </ul>

                    <h4 style={{ marginBottom: '0.5rem', marginTop: '1.5rem', color: 'var(--secondary)' }}>Sample Questions You Can Ask</h4>
                    <ul className="roadmap-list">
                        <li>"What skills do I need for web development?"</li>
                        <li>"Which domain has the highest salary?"</li>
                        <li>"How do I start learning AI/ML?"</li>
                        <li>"What projects should I build for my portfolio?"</li>
                    </ul>
                </div>

                {/* Practice with Coding Games */}
                <div className="info-box">
                    <h3 className="section-title">🎮 Practice with Coding Games</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        Enhance your coding skills with interactive games! Click on "Coding Games" 
                        in the navigation bar to access:
                    </p>
                    <ul className="roadmap-list">
                        <li><strong>Coding Fantasy:</strong> Learn programming through fantasy-themed challenges</li>
                        <li><strong>CSS Grid Garden:</strong> Master CSS Grid layout with fun puzzles</li>
                        <li><strong>CodinGame:</strong> Solve coding challenges and compete with others</li>
                        <li><strong>Elevator Saga:</strong> Program elevators with JavaScript</li>
                    </ul>
                </div>

                {/* LinkedIn & GitHub Guides */}
                <div className="info-box">
                    <h3 className="section-title">💼 LinkedIn & GitHub Guides</h3>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>LinkedIn Guide</h4>
                    <p style={{ marginBottom: '1rem' }}>
                        Learn how to build a professional LinkedIn profile that stands out to recruiters
                        and helps you network effectively in your chosen domain.
                    </p>

                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>GitHub Guide</h4>
                    <p>
                        Master GitHub to showcase your projects, contribute to open source, and 
                        demonstrate your coding skills to potential employers.
                    </p>
                </div>

                {/* Pro Tips */}
                <div className="info-box">
                    <h3 className="section-title">💡 Pro Tips</h3>
                    <ul className="roadmap-list">
                        <li>
                            <strong>Start with Interests:</strong> Choose a domain that genuinely interests you,
                            not just based on trends or salary
                        </li>
                        <li>
                            <strong>Learn Fundamentals First:</strong> Build a strong foundation before jumping
                            into advanced topics
                        </li>
                        <li>
                            <strong>Build Projects:</strong> Apply what you learn by building real-world projects
                        </li>
                        <li>
                            <strong>Stay Consistent:</strong> Regular practice is more effective than
                            intensive bursts of learning
                        </li>
                        <li>
                            <strong>Network:</strong> Connect with professionals in your chosen domain on
                            LinkedIn and GitHub
                        </li>
                        <li>
                            <strong>Use the Chatbot:</strong> Don't hesitate to ask questions - our AI is here to help!
                        </li>
                    </ul>
                </div>

                {/* Need More Help */}
                <div className="info-box">
                    <h3 className="section-title">🆘 Need More Help?</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        If you have questions or feedback about the website, use the feedback button
                        at the bottom of the page. We're constantly improving based on user input!
                    </p>
                    <p>
                        You can also chat with our AI assistant anytime for personalized guidance
                        on your career journey.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="info-box" style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Ready to Start Your Journey?</h3>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                        Now that you know how to use DomainDetector, explore domains and find your passion!
                    </p>
                    <a href="/#domains" className="btn btn-primary">Explore Domains</a>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;
