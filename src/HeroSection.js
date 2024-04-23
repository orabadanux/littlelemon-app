import React from 'react';
import './HeroSection.css';
import heroImage from './restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const navigate = useNavigate();

    const handleReserveTableClick = () => {
        navigate('/BookingPage');
      };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <p className="hero-subtitle">Located in Chicago</p>
        <p className="hero-description">
          Experience a blend of timeless Mediterranean flavors
          and modern culinary techniques, all brought to life in our
          family-run kitchen.
        </p>
        <button className="hero-button" onClick={handleReserveTableClick}>Reserve a table</button>
      </div>
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Delicious plate" className="hero-image"/>
      </div>
    </section>
  );
}

export default HeroSection;