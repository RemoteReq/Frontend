import React from 'react';

const Checkbox = ({ label, handleChange }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;