import React from 'react';
import './ServiceOverlay.css';

function ServiceOverlay({ service, onClose }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>{service.title}</h2>
        <p>{service.detailedDescription}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ServiceOverlay;
