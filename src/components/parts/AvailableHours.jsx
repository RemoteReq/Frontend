import React from 'react';

const AvailableHours = ({ handleChange, label }) => {
  return (
    <div>
      <label>{label}</label>

      <div className="available-hours">
        <p>From</p>
        <input
          type="time"
          onChange={handleChange}
          name="availableHoursFrom"
        />

        <p>To</p>
        <input
          type="time"
          onChange={handleChange}
          name="availableHoursTo"
          />
        </div>
    </div>
  );
};

export default AvailableHours;