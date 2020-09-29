import React from 'react';

const AvailableHours = ({ handleChange, label }) => {
  return (
    <div>
      <label>{label}</label>

      <div className="available-hours">
        <label>From</label>
        <input
          type="time"
          onChange={handleChange}
          name="availableHoursFrom"
        />

        <label>To</label>
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