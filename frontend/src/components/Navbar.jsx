import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser as faRegularUser } from '@fortawesome/free-regular-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
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
          <a href="#" className="nav-icon"><FontAwesomeIcon icon={faRegularUser} /></a>
          <a href="#" className="nav-icon"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#" className="nav-icon"><FontAwesomeIcon icon={faCartShopping} /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
