import React from 'react';
import logo from '../images/logo.webp';
import './header.css'; 

const Header = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Amazing Destination Logo" className="logo" />
        <h1 className="site-title">Amazing Destination</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <button onClick={() => handleNavigation('/')}>Home</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleNavigation('/destination')}>Destination</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleNavigation('/things-to-do')}>Things To Do</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleNavigation('/blogs')}>Blogs</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleNavigation('/gallery')}>Gallery</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleNavigation('/about')}>About Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

