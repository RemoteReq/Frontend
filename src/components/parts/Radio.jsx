import React from 'react';

const Radio = ({
  value, label, name,
}) => {
  return (
    <label className="radio">
      <input
        type="radio"
        value={value}
        name={name}
        />
      {label}
    </label>
  );
};

export default Radio;