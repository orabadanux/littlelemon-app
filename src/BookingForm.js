import React, { useState, useEffect } from 'react';
import './BookingForm.css'; 

function BookingForm({ availableTimes, onDateChange, onFormSubmit }) {

    const [isFormValid, setIsFormValid] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    useEffect(() => {
        setIsFormValid(
          date && time && guests >= 1 && occasion
        );
      }, [date, time, guests, occasion]);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        onDateChange(newDate);
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion
        };
        onFormSubmit(formData);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                <option value="">Please select a time</option>
                {Object.entries(availableTimes).map(([time, isAvailable]) => (
                    <option key={time} value={time} disabled={!isAvailable}>
                        {time}
                    </option>
                ))}
            </select>

            <label htmlFor="num-guests">Number of guests</label>
            <input
                type="number"
                id="num-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
            >
                <option value="">Select an option</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                
            </select>

            <button type="submit" className="submit-reservation" disabled={!isFormValid}>
                Make your reservation
            </button>
        </form>
    );
}

export default BookingForm;