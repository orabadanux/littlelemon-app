import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WeekSpecials.css';
import saladImage from './greeksalad.jpg';
import bruchettaImage from './bruchetta.svg';
import lemonDessertImage from './lemondessert.jpg';

function WeekSpecials() {
    const navigate = useNavigate();

    return (
        <div className="week-specials">
            <div className="specials-header">
                <h2 className="specials-title">This week's specials!</h2>
                <button className="menu-button" onClick={() => navigate('/MenuPage')}>Online menu</button>
            </div>
            <div className="cards-container">
                {[{ img: saladImage, title: 'Greek salad', price: '$12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.' },
                { img: bruchettaImage, title: 'Bruchetta', price: '$5.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.' },
                { img: lemonDessertImage, title: 'Lemon Dessert', price: '$5.00', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.' }
                ].map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.img} alt={item.title} className="card-image" />
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-price">{item.price}</p>
                        <p className="card-description">{item.description}</p>
                        <button className="order-button" onClick={() => navigate('/OrderPage')}>Order online</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeekSpecials;