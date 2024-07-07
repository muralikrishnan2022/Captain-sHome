import React, { useState } from 'react';

const Popup = ({ step, onSubmit, onClose, onDoItLater }) => {
  const [details, setDetails] = useState({
    name: '',
    age: '',
    waterUsage: '',
    wasteGeneration: '',
    electricItems: '',
    electricityBill: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value
    });
  };

  const handleSubmit = () => {
    onSubmit(details);
  };

  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}>X</button>
      {step === 1 && (
        <>
          <h2>Enter your details</h2>
          <div className="popup-field">
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <div className="popup-field">
            <label>Age:</label>
            <input type="number" name="age" onChange={handleChange} />
          </div>
          <div className="popup-field">
            <label>Water Usage (buckets):</label>
            <input type="number" name="waterUsage" onChange={handleChange} />
          </div>
          <div className="popup-field">
            <label>Waste Generation (bins):</label>
            <input type="number" name="wasteGeneration" onChange={handleChange} />
          </div>
          <div className="popup-field">
            <label>Electric Items:</label>
            <input type="number" name="electricItems" onChange={handleChange} />
          </div>
          <div className="popup-field">
            <label>Electricity Bill:</label>
            <input type="number" name="electricityBill" onChange={handleChange} />
          </div>
          <div className="popup-buttons">
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            <button className="do-it-later" onClick={onDoItLater}>Do it later</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Popup;
