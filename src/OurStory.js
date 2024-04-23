import React from 'react';
import './OurStory.css';
import storyImage from './MarioandAdrianb.jpg';

function OurStory() {
  return (
    <section className="our-story">
      <div className="story-content">
        <h2 className="story-title">Our Story</h2>
        <p className="story-text">
          Little Lemon is more than just a restaurant; it's a celebration of rich Mediterranean heritage fused with Chicago's dynamic dining scene. Our family’s traditional recipes have been handed down through generations and are now served with a contemporary twist by our passionate chefs. Join us for a dining experience where each dish tells a story of culture and craftsmanship.
        </p>
      </div>
      <div className="story-image-wrapper">
        <img src={storyImage} alt="Our Story" className="story-image"/>
      </div>
    </section>
  );
}

export default OurStory;