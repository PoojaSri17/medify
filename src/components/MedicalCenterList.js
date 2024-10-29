// src/components/MedicalCenterList.js
import React from 'react';
import CenterCard from './CenterCard'; // Import the card component


const MedicalCenterList = ({ centers, onBooking }) => {
  return (
    <div className="medical-center-list">
      {centers.length === 0 ? (
        <p>No medical centers found.</p>
      ) : (
        centers.map((center) => (
          <CenterCard key={center.id} center={center} onBooking={onBooking} />
        ))
      )}
    </div>
  );
};

export default MedicalCenterList;
