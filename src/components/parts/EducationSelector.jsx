import React from 'react';
import { degrees } from '#assets/inputs/inputs';

const EducationSelector = ({ handleChange, name, label }) => {
  return (
    <div className="select">
      <label>{label || 'Minimum Education Level Required'}</label>
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