import React from 'react';
import { causes } from '#assets/inputs/inputs';

const CauseSelector = ({ name, handleChange }) => {
  return (
    <div className="select">
      <select
        name={name}
        onChange={handleChange}
      >
        <option>-----</option>
        {
          causes.map((cause, key) => {
            return (
            <option key={key}>{cause}</option>
            );
          })
        }
      </select>
    </div>
  );
};

export default CauseSelector;