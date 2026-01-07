import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DomainDetail from './pages/DomainDetail';
import LinkedInGuide from './pages/LinkedInGuide';
import GitHubGuide from './pages/GitHubGuide';
import ChatBot from './components/ChatBot';
import FeedbackModal from './components/FeedbackModal';



function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/domain/:id" element={<DomainDetail />} />
                        <Route path="/linkedin-guide" element={<LinkedInGuide />} />
                        <Route path="/github-guide" element={<GitHubGuide />} />
                    </Routes>
                </main>
                <footer className="footer">
                    <div className="container">
                        <p>© 2026 Domain Detector. Build your future. | <a href="https://myportfolio775.netlify.app/my.html" target="_blank" rel="noopener noreferrer" className="portfolio-link">My_Portfolio</a></p>
                    </div>
                    <FeedbackModal />
                </footer>
                <ChatBot />
            </div>
        </Router>
    );
}

export default App;
