import React from 'react'
import './ErrorModalStyle.css'
function Modal({ message, onClose }) {
  return (
    <div className="modalOverlay">
      <div className="modalCard">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default Modal