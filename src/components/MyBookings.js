// src/pages/MyBookingsPage.js
import React, { useState, useEffect } from 'react';
//import './MyBookingsPage.css'; // Add custom styles

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulate fetching bookings from local storage or backend
    const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(savedBookings);
  }, []);

  return (
    <div className="my-bookings-page">
      <h1>My Bookings</h1>
      {bookings.length > 0 ? (
        bookings.map((booking, index) => (
          <div key={index} className="booking-item">
            <h2>{booking.centerName}</h2>
            <p>Date: {booking.date}</p>
            <p>Contact: {booking.contact}</p>
          </div>
        ))
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default MyBookingsPage;


