import React from 'react';

function CardModal({ onClose, cardTitle, cardText, link }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{cardTitle}</h2>
        <p style={{fontSize: 20}}>{cardText}</p>
      </div>
    </div>
  );
}

export default CardModal;
