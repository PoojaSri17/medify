// src/components/CenterCard.js
import React from 'react';


const CenterCard = ({ center, onBooking }) => {
  return (
    <div className="medical-center">
      <h2>{center.name}</h2>
      <p>{center.address}</p>
      <p>{center.phone}</p>
      <button onClick={() => onBooking(center)}>Book Appointment</button>
    </div>
  );
};

export default CenterCard;
