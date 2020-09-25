import React from 'react';
import { degrees } from '#assets/inputs/inputs';

const EducationSelector = ({ handleChange, name }) => {
  return (
    <div className="select">
      <label>Minimum Education Required</label>
      <select
        onChange={handleChange}
        name={`${name || 'highestEducationLevel'}`}
        >
        <option>-----</option>
        {
          degrees.map((degree, key) => {
            return (
              <option value={degree.value} key={key}>{degree.name}</option>
            );
          })
        }
      </select>
    </div>
  );
};

export default EducationSelector;