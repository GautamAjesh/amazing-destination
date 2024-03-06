import React from 'react';
import './footer.css'; 
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Connect With Us</h2>
        <div className="social-media">
          <a href="https://www.instagram.com/freedomtraveller0" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://youtube.com/@freedomtravellernepal7539?si=W7BTyhCGvnT7wlnH" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
          <a href="https://wa.me/9779862253793" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h2>Amazing Destination</h2>
        <p>We aim to provide the best travel experiences to our customers. Explore new destinations and create unforgettable memories with us.</p>
        <div className="contact-details">
            <p>
              Address: Thamel, Kathmandu <br />
              Email: freedomtraveler594@gmail.com <br />
              WhatsApp: +9779862253793
            </p>
          </div>
        <a href="/contact" className="contact-link">Contact Us</a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Amazing Destination. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
