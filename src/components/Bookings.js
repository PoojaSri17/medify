// src/pages/BookingPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
//import './BookingPage.css'; // Add custom styles

const BookingPage = () => {
  const location = useLocation();
  const { center } = location.state || {};
  
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = () => {
    // Here, you would typically send the booking data to your backend
    alert(`Booking confirmed for ${name} on ${date} at ${center.name}`);
    // You can also implement logic to save the booking in local storage or state
  };

  return (
    <div className="booking-page">
      <h1>Booking Appointment at {center.name}</h1>
      <p>Address: {center.address}</p>
      <p>Phone: {center.phone}</p>
      
      <form onSubmit={(e) => { e.preventDefault(); handleBooking(); }}>
        <div>
          <label>
            Your Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Appointment Date:
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
