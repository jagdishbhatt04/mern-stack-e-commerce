import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser as faRegularUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './AuthForm.css'; // Add this for additional styling

const Navbar = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const toggleAuthForm = () => {
    setShowAuthForm(!showAuthForm);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-section">
            <a href="#" className="nav-link">WOMEN</a>
            <a href="#" className="nav-link">MEN</a>
            <a href="#" className="nav-link">KIDS</a>
            <a href="#" className="nav-link">BRANDS</a>
          </div>
          <div className="navbar-logo">
            <a href="#">HEAVENLY</a>
          </div>
          <div className="navbar-icons">
            <a href="#" className="nav-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
            <a onClick={toggleAuthForm} className="nav-icon"><FontAwesomeIcon icon={faRegularUser} /></a>
            <a href="#" className="nav-icon"><FontAwesomeIcon icon={faHeart} /></a>
            <a href="#" className="nav-icon"><FontAwesomeIcon icon={faCartShopping} /></a>
          </div>
        </div>
      </nav>

      {showAuthForm && (
        <div className="auth-overlay" onClick={toggleAuthForm}>
          <div className="auth-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleAuthForm}>&times;</button>
            <div className="auth-tabs">
              <button className={`tab-button ${activeTab === 'login' ? 'active' : ''}`} onClick={() => switchTab('login')}>Login</button>
              <button className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`} onClick={() => switchTab('signup')}>Sign Up</button>
            </div>
            <div className="auth-form">
              {activeTab === 'login' && (
                <div>
                  <h2>Login</h2>
                  <div className="input-group">
                    <label>Email</label>
                    <input type="email" />
                  </div>
                  <div className="input-group">
                    <label>Password</label>
                    <input type="password" />
                  </div>
                  <button className="but">Login</button>
                  <p>Don't have an account? <a onClick={() => switchTab('signup')}>Sign Up</a></p>
                </div>
              )}
              {activeTab === 'signup' && (
                <div>
                  <h2>Sign Up</h2>
                  <div className="input-group">
                    <label>Email</label>
                    <input type="email" />
                  </div>
                  <div className="input-group">
                    <label>Password</label>
                    <input type="password" />
                  </div>
                  <div className="input-group">
                    <label>Confirm Password</label>
                    <input type="password" />
                  </div>
                  <button className="but">Sign Up</button>
                  <p>Already have an account? <a onClick={() => switchTab('login')}>Login</a></p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
