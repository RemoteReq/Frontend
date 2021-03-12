import React from 'react';
import { jobTitles } from '#assets/inputs/inputs';

const CauseSelector = ({ name, handleChange }) => {
  return (
    <div className="select">
      <select
        name={name}
        onChange={handleChange}
      >
        <option>-----</option>
        {
          jobTitles.map((jobTitle, key) => {
            return (
            <option key={key}>{jobTitle}</option>
            );
          })
        }
      </select>
    </div>
  );
};

export default CauseSelector;