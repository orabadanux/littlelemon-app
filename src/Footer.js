import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './Logofooter.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
        <div className="footer-column">
          <h4>Doormat navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutPage">About</Link></li>
            <li><Link to="/MenuPage">Menu</Link></li>
            <li><Link to="/BookingPage">Reservations</Link></li>
            <li><Link to="/OrderPage">Order online</Link></li>
            <li><Link to="/LoginPage">Login</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Address: 456 Chicago Ave, Chicago, IL</p>
          <p>Phone: (000) 123-4567</p>
          <p>Email: info@littlelemonchicago.com</p>
        </div>
        <div className="footer-column">
          <h4>Social media links</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;