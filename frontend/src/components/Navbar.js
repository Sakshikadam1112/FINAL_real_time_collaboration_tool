import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-brand" to="/dashboard">
                TeamSync
                </Link>
                <div className="navbar-links">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                    {user ? (
                        <ul className="nav-items">
                            <li className="nav-item">
                                <span className="user-info">Hi {user.username}</span>
                                <button className="btn-logout" onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav-items">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
