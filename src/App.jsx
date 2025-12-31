import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DomainDetail from './pages/DomainDetail';
import LinkedInGuide from './pages/LinkedInGuide';
import GitHubGuide from './pages/GitHubGuide';
import ChatBot from './components/ChatBot';



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
                        <p>© 2025 Domain Detector. Build your future.</p>
                    </div>
                </footer>
                <ChatBot />
            </div>
        </Router>
    );
}

export default App;
