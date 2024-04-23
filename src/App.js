import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import BookingPage from './BookingPage';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;