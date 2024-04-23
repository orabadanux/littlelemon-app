import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import Footer from './Footer';
import { fetchAPI, submitAPI } from './api'; 
import './BookingPage.css';

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.times;
    default:
      return state;
  }
};

function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, {});

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    fetchAPI(today).then(times => {
      dispatch({ type: 'SET_TIMES', times });
    });
  }, []);

  const handleDateChange = (date) => {
    fetchAPI(date).then(times => {
      dispatch({ type: 'SET_TIMES', times });
    });
  };

  const submitForm = async (formData) => {
    const result = await submitAPI(formData);
    if (result) {
      navigate('/confirmed');
    } else {
      alert('There was an issue with your booking. Please try again.');
    }
  };

  return (
    <div className="booking-page">
      <h1 className="booking-title" style={{ color: '#333333' }}>Book a table</h1>
      <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} onFormSubmit={submitForm}/>
      <Footer />
    </div>
  );
}

export default BookingPage;