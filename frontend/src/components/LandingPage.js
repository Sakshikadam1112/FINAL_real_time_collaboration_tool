import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="landing-header">
                <h1>Welcome to <span className="brand-name">TeamSync</span></h1>
                <p className="tagline">
                    Seamless collaboration, effortless communication.
                </p>
            </div>
            <div className="landing-content">
                <p className="description">
                    Collaborate on projects, share ideas, and stay organized—all in one place.
                </p>
                <div className="cta-buttons">
                    <Link to="/register" className="bt btn-pr">Get Started</Link>
                    <Link to="/login" className="bt btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

