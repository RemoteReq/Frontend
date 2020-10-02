import React from 'react';
import { timeZones } from '#assets/inputs/inputs';

const TimeZoneSelector = ({ handleChange, label }) => {
  return (
    <div className="select">
      <label>{label || 'Time Zone'}</label>
      <select
        name="timeZone"
        onChange={handleChange}
        >
        <option>-----</option>
        {
          timeZones.map((timeZone, key) => {
            return (
              <option value={timeZone.value} key={key}>{timeZone.zone}</option>
            );
          })
          }
      </select>
    </div>
  );
};

export default TimeZoneSelector;