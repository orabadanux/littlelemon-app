import React from 'react';
import './GuestsVoices.css';
import starFull from './star-full.svg';
import starEmpty from './star-empty.svg';
import guest1 from './guest-1.jpg';
import guest2 from './guest-2.png';
import guest3 from './guest-3.svg';
import guest4 from './guest-4.svg';

function GuestsVoices() {
  const testimonials = [
    {
      img: guest1,
      name: 'Sarah K.',
      rating: 4,
      comment: 'The perfect blend of traditional and modern—truly a culinary gem in Chicago.'
    },
    {
        img: guest2,
        name: 'Emma T.',
        rating: 5,
        comment: 'Fantastic atmosphere and even better food. Every dish brings a new surprise.'
      },
    {
        img: guest3,
        name: 'George P.',
        rating: 5,
        comment: 'Every visit brings a new flavor discovery, always leaving us wanting more.'
    },
    {
        img: guest4,
        name: 'Linda M.',
        rating: 4,
        comment: 'Their family recipes take you straight to the Mediterranean without leaving the city.'
    },
  ];

  return (
    <section className="guests-voices" style={{ backgroundColor: '#FBDABB' }}>
      <h2>Guests' voices</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card" style={{ backgroundColor: '#EDEFEE' }}>
            <img src={testimonial.img} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <div className="rating">
              {Array.from({ length: 5 }, (_, i) => (
                <img key={i} src={i < testimonial.rating ? starFull : starEmpty} alt={i < testimonial.rating ? 'Full Star' : 'Empty Star'} />
              ))}
            </div>
            <p>{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GuestsVoices;