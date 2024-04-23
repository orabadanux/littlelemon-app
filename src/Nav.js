import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Logo.svg';
import './Nav.css';

function Nav() {
  
  const getActiveLinkClass = ({ isActive }) =>
    isActive ? 'nav-link nav-link-active' : 'nav-link';

  return (
    <nav className="navbar">
      <img src={logo} alt="Little Lemon Logo" className="navbar-logo" />
      <div className="navbar-links">
        <NavLink to="/" className={getActiveLinkClass}>Home</NavLink>
        <NavLink to="/AboutPage" className={getActiveLinkClass}>About</NavLink>
        <NavLink to="/MenuPage" className={getActiveLinkClass}>Menu</NavLink>
        <NavLink to="/BookingPage" className={getActiveLinkClass}>Reservations</NavLink>
        <NavLink to="/OrderPage" className={getActiveLinkClass}>Order online</NavLink>
        <NavLink to="/LoginPage" className={getActiveLinkClass}>Login</NavLink>
      </div>
    </nav>
  );
}

export default Nav;